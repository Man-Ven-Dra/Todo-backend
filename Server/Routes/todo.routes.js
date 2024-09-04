const express = require('express')
const router = express.Router();

const {createTodo} = require('../Controllers/createTodo')
const {updateTodo} = require('../Controllers/updateTodo')
const {getTodos, getTodoById} = require('../Controllers/getTodo')
const {deleteTodo} = require('../Controllers/deleteTodo')

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodos);
router.put("/updateTodo/:id", updateTodo);
router.get("/getTodo/:id", getTodoById);
router.delete("/deleteTodo/:id", deleteTodo)

module.exports = router;