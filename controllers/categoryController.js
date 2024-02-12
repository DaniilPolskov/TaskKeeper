const Category = require('../models/category');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.send(categories);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.send(category);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).send('Category not found');
    }
    res.send(category);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).send('Category not found');
    }
    await category.update({ name });
    res.send(category);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).send('Category not found');
    }
    await category.destroy();
    res.send('Category deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};