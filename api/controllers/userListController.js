'use strict';

var mongoose = require('mongoose');
var User 	 = mongoose.model('Users');

exports.getAllUser = function(req,res)
{
	User.find({},function(err,user)
		{

			if(err)
			  res.send(err);

			 res.json(user);
		}

		);

};

exports.createUser= function(req,res)
{
	var new_user = new User(req.body);
    new_user.save(function(err,user)
    	{
    			if(err)
    			res.send(err);
    			res.json(user);
    	}


   	);

};

exports.getUser = function(req,res)
{
	User.findById(req.params.userId,function(err,user)
		 {
		 	if(err)
		 	res.send(err);
		 	res.json(user);
		 }
		);
};