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
const updateTodo = async (req, res) => {
  const { text } = req.body;
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      { _id: req.params.id },
      { text },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(updatedTodo);
    }
  } catch (error) {
    res.status(404).json({ error });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const todo = await TodoModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ success: true, todo: todo });
  } catch (error) {
    res.status(404).josn({ success: failed, error: error });
  }
};

module.exports = { getTodo, saveTodo, updateTodo, deleteTodo };
