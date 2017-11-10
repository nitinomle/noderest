'use strict';

module.exports = function (app) {

 var todoList		= require("../controllers/todoListController.js");

 app.route('/tasks')
    .get(todoList.list_all_task)
    .post(todoList.create_a_task);

 app.route('/tasks/:taskId')
    .get(todoList.readTask)
    .put(todoList.updateTask)
    .delete(todoList.deleteTask);

};