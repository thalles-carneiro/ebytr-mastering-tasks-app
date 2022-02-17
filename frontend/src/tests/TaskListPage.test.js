import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import App from '../App';

import * as tasksAPI from '../services/tasksAPI';
import { readTasks, saveTask, removeTask, taskAPIDefaultResponse } from './mocks';

describe('TaskList Page testes', () => {
  it('form with input and button to add task is on the screen', async () => {
    render(<App />);

    const inputTask = screen.getByRole('textbox');
    const addTaskButton = screen.getByRole('button', { name: 'Add' });

    expect(inputTask).toBeInTheDocument();
    expect(addTaskButton).toBeInTheDocument();
  });

  it('the page rendered with the tasks already set on the database', async () => {
    jest.spyOn(tasksAPI, 'getTasks').mockImplementation(
      () => Promise.resolve(taskAPIDefaultResponse),
    );

    render(<App />);

    const tasks = await screen.findAllByRole('listitem');
    expect(tasks).toHaveLength(2);
  });

  it('the user are capable of adding a new task', async () => {
    jest.spyOn(tasksAPI, 'getTasks').mockImplementation(
      () => Promise.resolve(taskAPIDefaultResponse),
    );
    jest.spyOn(tasksAPI, 'addTask').mockImplementation();

    render(<App />);

    const inputTask = screen.getByRole('textbox');
    const addTaskButton = screen.getByRole('button', { name: 'Add' });

    userEvent.type(inputTask, 'Task 1');
    userEvent.click(addTaskButton);
    userEvent.type(inputTask, 'Task 2');
    userEvent.click(addTaskButton);

    const updatedTasks = await screen.findAllByRole('listitem');
    expect(updatedTasks).toHaveLength(2);
  });
});
