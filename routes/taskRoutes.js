const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/add', taskController.addTask);
router.delete('/:id', taskController.deleteTask);
router.put('/:id', taskController.updateTask);
router.get('/:id', taskController.getTaskById);

module.exports = router;
