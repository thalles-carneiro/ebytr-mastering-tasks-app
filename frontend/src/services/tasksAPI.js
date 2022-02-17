const getTasks = async () => {
  const response = await fetch('http://localhost:3000/tasks');
  const data = await response.json();
  return data;
};

const addTask = async (task) => {
  await fetch('http://localhost:3000/tasks', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ task }),
  });
};

const deleteTask = async (id) => {
  await fetch(`http://localhost:3000/tasks/${id}`, { method: 'DELETE' });
};

export {
  deleteTask,
  getTasks,
  addTask,
};
