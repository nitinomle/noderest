'use strict';

var mongoose = require("mongoose");
var Task	  = mongoose.model("Tasks");

exports.list_all_task = function(req,res)
{
	Task.find({},function(err,task)
		{
			if (err)
			{
			res.send(err);

			}else
			{
				res.json(task);
			}
		}
	);

};

exports.create_a_task =function(req,res)
{

	var new_task = new Task(req.body);
	new_task.save(function(err, task) {
	if (err)
	res.send(err);
	res.json(task);
	});

};
exports.readTask = function(req, res) {

	var ObjectId = require('mongoose').Types.ObjectId; 
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
    {
    	 res.send(err);
     
    }else
    {
      res.json(task);
    }
    });
};


exports.updateTask = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.deleteTask = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

