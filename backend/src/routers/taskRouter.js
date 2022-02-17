const express = require('express');

const router = express.Router();

const TaskController = require('../controllers/tasks');

router.get('/', TaskController.getAll);
router.post('/', TaskController.add);
router.put('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);

module.exports = router;
