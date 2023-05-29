const express = require('express');
const router = express.Router();
const {
  getAll,
  getSingle,
  createTodo,
  multipleCreate,
  updateTodo,
  deleteTodo,
} = require("../controller/todo.controller");

//get all Todo
router.get("/", getAll);

//get single todo by id
router.get("/:id", getSingle);

//post todo
router.post("/", createTodo);


//post multiple todo
router.post("/all", multipleCreate);

//update todo
router.put("/:id", updateTodo);

//delete todo
router.delete("/:id", deleteTodo);

module.exports = router;