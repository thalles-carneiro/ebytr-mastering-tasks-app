const { Types: { ObjectId } } = require('mongoose');

module.exports = {
  newTask: {
    _id: new ObjectId('61a29c5299147450808a575f'),
    task: 'Tarefa 1',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    status: 'Pendente',
  },
  newTaskList: [
    {
      _id: new ObjectId('61a29c147450808a575f5299'),
      task: 'Tarefa 1',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      status: 'Pendente',
    },
    {
      _id: new ObjectId('c529914745061a29808a575f'),
      task: 'Tarefa 2',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      status: 'Pendente',
    },
  ],
};
