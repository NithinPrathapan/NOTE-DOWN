const TodoModel = require("../models/todoModel");

const getTodo = async (req, res) => {
  const todo = await TodoModel.find({});
  res.send(todo);
};

const saveTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const todo = await TodoModel.create({ text });
    res.status(200).json({ success: true, todo: todo });
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = { getTodo, saveTodo };
