const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.send(tasks);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createTask = async (req, res) => {
  try {
    const { task_name, description, status, dateCreate, dateDue, category_id, user_id } = req.body;
    const task = await Task.create({ task_name, description, status, dateCreate, dateDue, category_id, user_id });
    res.send(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).send('Task not found');
    }
    res.send(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const { task_name, description, status, dateCreate, dateDue, category_id, user_id } = req.body;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).send('Task not found');
    }
    await task.update({ task_name, description, status, dateCreate, dateDue, category_id, user_id });
    res.send(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).send('Task not found');
    }
    await task.destroy();
    res.send('Task deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
