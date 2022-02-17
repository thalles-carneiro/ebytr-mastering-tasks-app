const sinon = require('sinon');
const { expect } = require('chai');

const TaskModel = require('../../src/models/tasks');
const TaskService = require('../../src/services/tasks');

const { newTask, newTaskList } = require('../mocks/tasksData');

describe('Task Service tests', () => {
  after(async () => {
    sinon.reset();
  });

  describe('Create task', () => {
    beforeEach(async () => {
      sinon.stub(TaskModel, 'add').resolves(newTask);
    })

    afterEach(async () => {
      sinon.restore();
    });

    it('success creating a task', async () => {
      const task = await TaskService.add('Tarefa 1');

      expect(task).to.be.an('object');
      expect(task).to.have.property('task', 'Tarefa 1');
      expect(task).to.have.property('status', 'Pendente');
    });
  });

  describe('Get tasks', () => {
    beforeEach(async () => {
      sinon.stub(TaskModel, 'getAll').resolves(newTaskList);
    })

    afterEach(async () => {
      sinon.restore();
    });

    it('success getting all tasks', async () => {
      const tasks = await TaskService.getAll();

      expect(tasks).to.be.an('array');
      expect(tasks).to.have.length(2);
    });
  });

  describe('Update task', () => {
    beforeEach(async () => {
      sinon.stub(TaskModel, 'update').resolves({ ...newTask, task: 'Task One'});
    })

    afterEach(async () => {
      sinon.restore();
    });

    it('success updating a task', async () => {
      const updatedTask = await TaskService.update(newTask._id, 'Task One');

      expect(updatedTask).to.be.an('object');
      expect(updatedTask).to.have.property('task', 'Task One');
    });
  });

  describe('Delete task', () => {
    beforeEach(async () => {
      sinon.stub(TaskModel, 'delete').resolves(null);
    })

    afterEach(async () => {
      sinon.restore();
    });

    it('success deleting a task', async () => {
      const deletedTask = await TaskService.delete(newTask._id);

      expect(deletedTask).to.be.null;
    });
  });
});