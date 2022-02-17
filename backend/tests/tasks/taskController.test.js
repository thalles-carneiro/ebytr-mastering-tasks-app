const sinon = require('sinon');
const { expect } = require('chai');

const TaskService = require('../../src/services/tasks');
const TaskController = require('../../src/controllers/tasks');

const { newTask, newTaskList } = require('../mocks/tasksData');

describe('Task Controller tests', () => {
  after(async () => {
    sinon.reset();
  });

  describe('Create task', () => {
    const response = {};
    const request = {};
    const next = () => {};

    beforeEach(async () => {
      request.body = { task: 'Tarefa 1' };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(TaskService, 'add').resolves(newTask);
    });

    afterEach(async () => {
      sinon.restore();
    });

    it('receives status 201', async () => {
      await TaskController.add(request, response, next);

      expect(response.status.calledWith(201)).to.be.true;
    });

    it('returns the task', async () => {
      await TaskController.add(request, response, next);

      expect(response.json.calledWith(newTask)).to.be.true;
    });
  });

  describe('Get tasks', () => {
    const response = {};
    const request = {};
    const next = () => {};

    beforeEach(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(TaskService, 'getAll').resolves(newTaskList);
    });

    afterEach(async () => {
      sinon.restore();
    });

    it('receives status 200', async () => {
      await TaskController.getAll(request, response, next);

      expect(response.status.calledWith(200)).to.be.true;
    });

    it('returns all tasks', async () => {
      await TaskController.getAll(request, response, next);

      expect(response.json.calledWith(newTaskList)).to.be.true;
    });
  });

  describe('Update task', () => {
    const response = {};
    const request = {};
    const next = () => {};

    beforeEach(async () => {
      request.body = { id: newTask._id, task: 'Task One' };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(TaskService, 'update').resolves({ ...newTask, task: 'Task One'});
    });

    afterEach(async () => {
      sinon.restore();
    });

    it('receives status 200', async () => {
      await TaskController.update(request, response, next);

      expect(response.status.calledWith(200)).to.be.true;
    });

    it('returns the updated task', async () => {
      await TaskController.update(request, response, next);

      expect(response.json.calledWith({ ...newTask, task: 'Task One'})).to.be.true;
    });
  });

  describe('Delete task', () => {
    const response = {};
    const request = {};
    const next = () => {};

    beforeEach(async () => {
      request.body = { id: newTask._id };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(TaskService, 'delete').resolves(null);
    });

    afterEach(async () => {
      sinon.restore();
    });

    it('receives status 200', async () => {
      await TaskController.delete(request, response, next);

      expect(response.status.calledWith(200)).to.be.true;
    });

    it('returns null', async () => {
      await TaskController.delete(request, response, next);

      expect(response.json.calledWith(null)).to.be.true;
    });
  });
});