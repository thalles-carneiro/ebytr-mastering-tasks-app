const sinon = require('sinon');
const { expect } = require('chai');

const db = require('../../src/models/db');
const TaskModel = require('../../src/models/tasks');

const { getConnection } = require('../mocks/connection');
const { newTask, newTaskList } = require('../mocks/tasksData');

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

  describe('Create task', () => {
    beforeEach(async () => {
      await dbMock.collection(TASKS).insertOne(newTask);
    })

    afterEach(async () => {
      await dbMock.collection(TASKS).deleteMany({});
    });

    it('a task is an object', async () => {
      const task = await TaskModel.add('Tarefa 2');

      expect(task).to.be.an('object');
    });

    it('the task was created with the correct values', async () => {
      const task = await TaskModel.add('Tarefa 2');

      expect(task).to.have.property('task', 'Tarefa 2');
      expect(task).to.have.property('status', 'Pendente');
    });

    it('the task has been added to the collection', async () => {
      await TaskModel.add('Tarefa 2');
      const tasks = await dbMock.collection(TASKS).find().toArray();

      expect(tasks).to.have.length(2);
    });
  });

  describe('Get tasks', () => {
    beforeEach(async () => {
      await dbMock.collection(TASKS).insertMany(newTaskList);
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
        expect(task).to.have.property('task', newTaskList[index].task);
        expect(task).to.have.property('status', newTaskList[index].status);
      })
    });
  });

  describe('Update task', () => {
    beforeEach(async () => {
      await dbMock.collection(TASKS).insertOne(newTask);
    });

    afterEach(async () => {
      await dbMock.collection(TASKS).deleteMany({});
    });

    it('the task was updated', async () => {
      await TaskModel.update(
        newTask._id,
        'Task One',
      );

      const updatedTask = await dbMock.collection(TASKS).findOne({ _id: newTask._id });

      expect(updatedTask).to.have.property('task', 'Task One');
    });
  });

  describe('Delete task', () => {
    beforeEach(async () => {
      await dbMock.collection(TASKS).insertOne(newTask);
    });

    afterEach(async () => {
      await dbMock.collection(TASKS).deleteMany({});
    });

    it('the task was deleted', async () => {
      await TaskModel.delete(newTask._id);

      const deletedTask = await dbMock.collection(TASKS).findOne({ _id: newTask._id });

      expect(deletedTask).to.be.null;
    });
  });
});
