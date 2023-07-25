const express = require("express");
const {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoControllers");
const router = express.Router();

router.get("/", getTodo);
router.post("/save", saveTodo);
router.patch("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
