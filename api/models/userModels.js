'use strict';

var mongoose = require('mongoose');
var Schema	 = mongoose.Schema;

var UserScheme = new Schema (
{
	user_id : Schema.Types.ObjectId,
	name:
	{
		type:String,
		required :'Please enter user name'
	},
	age:
	{
		type:Number,
		required:'Please enter use age',

	},
	email:
	{
		type:String,
		index:true,
		unique:true
	},
	addedDate:
	{
		type:Date,
		default:Date.now

	},
	role:
	{
		type:[
		{
			type:String,
			enum:['user','manager','admin']
		}

		],
		default:['user']

	} 




});

module.exports = mongoose.model('Users',UserScheme);