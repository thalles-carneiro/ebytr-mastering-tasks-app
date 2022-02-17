export const defaultUser = {
  name: 'User Test',
  email: 'email@test.com',
};

export const taskAPIDefaultResponse = [
  {
    _id: '620d841576f8d49059337d1d',
    task: 'First Task of All',
    status: 'Pendente',
    createdAt: '2022-02-16T23:09:09.410Z',
    updatedAt: '2022-02-17T02:29:13.856Z',
    __v: 0,
  },
  {
    _id: '620db1d72c9c0026d2f8daba',
    task: 'Task 2',
    status: 'Pendente',
    createdAt: '2022-02-17T02:24:23.397Z',
    updatedAt: '2022-02-17T02:24:23.397Z',
    __v: 0,
  },
];

const TASKS = 'tasks';

if (!JSON.parse(localStorage.getItem(TASKS))) {
  localStorage.setItem(TASKS, JSON.stringify([]));
}

export const readTasks = () => JSON.parse(localStorage.getItem(TASKS));

export const saveTask = (newTask) => {
  const tasks = readTasks();
  localStorage.setItem(TASKS, JSON.stringify([...tasks, newTask]));
};

export const removeTask = (taskId) => {
  const tasks = readTasks();
  localStorage.setItem(TASKS, JSON.stringify(tasks.filter(({ _id }) => _id !== taskId)));
};
