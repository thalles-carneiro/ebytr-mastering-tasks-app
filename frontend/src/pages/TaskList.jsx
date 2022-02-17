import React, { useState, useEffect } from 'react';

import Header from '../components/Header';

import { getTasks, addTask, deleteTask } from '../services/tasksAPI';

const TaskList = () => {
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(true);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    if (!task) {
      (async () => {
        const tasks = await getTasks();
        setTaskList(tasks);
        setLoading(false);
      })();
    }
  }, [task, loading]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await addTask(task);
    setTask('');
  };

  const handleDeleteButton = async (id) => {
    setLoading(true);
    await deleteTask(id);
  }

  return (
    <>
      <Header />
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          placeholder="Add a new task"
          value={ task }
          onChange={ ({ target: { value } }) => setTask(value) }
        />
        <button type="submit">Add</button>
      </form>
      {
        loading
          ? (
            <p>Loading...</p>
          )
          : (
            taskList.map(({ _id, task }) => (
              <li key={ _id }>
                <p>{ task }</p>
                <button
                  type="button"
                  onClick={ () => handleDeleteButton(_id) }
                >
                  Deletar
                </button>
              </li>
            ))
          )
      }
    </>
  );
};

export default TaskList;
