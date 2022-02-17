const TaskModel = require('../../models/tasks');

const getAll = async () => TaskModel.getAll();

const add = async (task) => TaskModel.add(task);

const update = async (id, task) => TaskModel.update(id, task);

const remove = async (id) => TaskModel.delete(id);

module.exports = {
  getAll,
  update,
  delete: remove,
  add,
};
