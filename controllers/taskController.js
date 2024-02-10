const Task = require('../models/task');

exports.getTaskById = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching task' });
    }
};
  
exports.addTask = async (req, res) => {
  try {
    const { task_name, description, status, dateCreate, dateDue, category_id, user_id } = req.body;
    const task = await Task.create({ task_name, description, status, dateCreate, dateDue, category_id, user_id });
    res.status(201).json({ message: 'Task added', task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({ where: { id } });
    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task_name, description, status, dateCreate, dateDue, category_id, user_id } = req.body;
    await Task.update({ task_name, description, status, dateCreate, dateDue, category_id, user_id }, { where: { id } });
    res.status(200).json({ message: 'Task updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating' });
  }
};
