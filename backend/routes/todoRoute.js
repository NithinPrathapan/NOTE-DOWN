const express = require("express");
const { getTodo, saveTodo } = require("../controllers/todoControllers");
const router = express.Router();

router.get("/", getTodo);
router.post("/save", saveTodo);

module.exports = router;
