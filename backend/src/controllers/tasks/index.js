const TaskService = require('../../services/tasks');

const getAll = async (_req, res) => {
  const tasks = await TaskService.getAll();

  return res.status(200).json(tasks);
};

const add = async (req, res) => {
  const { task } = req.body;

  const newTask = await TaskService.add(task);

  return res.status(201).json(newTask);
};

const update = async (req, res) => {
  const { id, task } = req.body;

  const updatedTask = await TaskService.update(id, task);

  return res.status(200).json(updatedTask);
};

const remove = async (req, res) => {
  const { id } = req.body;

  const deletedTask = await TaskService.delete(id);

  return res.status(200).json(deletedTask);
};

module.exports = {
  getAll,
  update,
  delete: remove,
  add,
};
