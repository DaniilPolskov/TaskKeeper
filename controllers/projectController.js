const Project = require('../models/project');

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.send(projects);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const project = await Project.create({ name, description });
    res.send(project);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).send('Project not found');
    }
    res.send(project);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description } = req.body;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).send('Project not found');
    }
    await project.update({ name, description });
    res.send(project);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).send('Project not found');
    }
    await project.destroy();
    res.send('Project deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
};
