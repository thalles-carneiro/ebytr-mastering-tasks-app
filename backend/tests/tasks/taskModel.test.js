const sinon = require('sinon');
const { expect } = require('chai');
const { Types: { ObjectId } } = require('mongoose');

const db = require('../../src/models/db');
const TaskModel = require('../../src/models/tasks');
const { getConnection } = require('../mocks/connection');

const TASKS = 'tasks';

describe('Task Model tests', () => {
  let dbMock = null;

  before(async () => {
    dbMock = await getConnection();
    sinon.stub(db, 'connection').resolves(dbMock);
  });

  after(async () => {
    sinon.reset();
    await dbMock.close();
  });

  describe('Create task', async () => {
    const taskMock = {
      _id: new ObjectId('61a29c5299147450808a575f'),
      task: 'Tarefa 1',
      createdAt: new Date.now(),
      updatedAt: new Date.now(),
      status: 'Pendente',
    };

    beforeEach(async () => {
      await dbMock.collection(TASKS).insertOne(taskMock);
    });

    afterEach(async () => {
      await dbMock.collection(TASKS).deleteMany({});
    });

    it('a task is an object', async () => {
      const task = await TaskModel.add({ task: 'Tarefa 2' });

      expect(task).to.be.an('object');
    });

    it('the task was created with the correct values', async () => {
      const task = await TaskModel.add({ task: 'Tarefa 2' });

      expect(task).to.haveOwnProperty('task', 'Tarefa 2');
      expect(task).to.haveOwnProperty('status', 'Pendente');
    });

    it('the task has been added to the collection', async () => {
      await TaskModel.add({ task: 'Tarefa 2' });
      const tasks = await dbMock.collection(TASKS).find().toArray();

      expect(tasks).to.have.length(2);
    });
  });

  describe('Get tasks', async () => {
    const tasksMock = [
      {
        _id: new ObjectId('61a29c147450808a575f5299'),
        task: 'Tarefa 1',
        createdAt: new Date.now(),
        updatedAt: new Date.now(),
        status: 'Pendente',
      },
      {
        _id: new ObjectId('c529914745061a29808a575f'),
        task: 'Tarefa 2',
        createdAt: new Date.now(),
        updatedAt: new Date.now(),
        status: 'Pendente',
      },
    ];

    beforeEach(async () => {
      await dbMock.collection(TASKS).insertMany(tasksMock);
    });

    afterEach(async () => {
      await dbMock.collection(TASKS).deleteMany({});
    });

    it('the tasks are in an array', async () => {
      const tasks = await TaskModel.getAll();

      expect(tasks).to.be.an('array');
    });

    it('get all the tasks', async () => {
      const tasks = await TaskModel.getAll();

      expect(tasks).to.have.length(2);
    });

    it('all the tasks have the correct values', async () => {
      const tasks = await TaskModel.getAll();

      tasks.forEach((task, index) => {
        expect(task).to.haveOwnProperty('task', tasksMock[index].task);
        expect(task).to.haveOwnProperty('status', tasksMock[index].status);
      })
    });
  });

  describe('Update task', async () => {
    const taskMock = {
      _id: new ObjectId('61a29c5299147450808a575f'),
      task: 'Tarefa 1',
      createdAt: new Date.now(),
      updatedAt: new Date.now(),
      status: 'Pendente',
    };

    beforeEach(async () => {
      await dbMock.collection(TASKS).insertOne(taskMock);
    });

    afterEach(async () => {
      await dbMock.collection(TASKS).deleteMany({});
    });

    it('the task was updated', async () => {
      await TaskModel.update(
        taskMock._id,
        { task: 'Task One' },
      );

      const updatedTask = await dbMock.collection(TASKS).findById(taskMock._id);

      expect(updatedTask).to.haveOwnProperty('task', 'Task One');
    });
  });

  describe('Delete task', async () => {
    const taskMock = {
      _id: new ObjectId('61a29c5299147450808a575f'),
      task: 'Tarefa 1',
      createdAt: new Date.now(),
      updatedAt: new Date.now(),
      status: 'Pendente',
    };

    beforeEach(async () => {
      await dbMock.collection(TASKS).insertOne(taskMock);
    });

    afterEach(async () => {
      await dbMock.collection(TASKS).deleteMany({});
    });

    it('the task was deleted', async () => {
      await TaskModel.delete(taskMock._id);

      const deletedTask = await dbMock.collection(TASKS).findById(taskMock._id);

      expect(deletedTask).to.be.null;
    });
  });
});
