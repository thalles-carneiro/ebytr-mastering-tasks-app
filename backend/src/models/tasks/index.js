const Task = require('./taskSchema');

const getAll = async () => Task.find();

const add = async (task) => Task.create({ task });

const update = async (id, task) => Task.findByIdAndUpdate(
  id,
  { task },
  { new: true },
);

const remove = async (id) => {
  const task = await Task.findById(id);
  await task.remove();
};

module.exports = {
  getAll,
  update,
  delete: remove,
  add,
};
