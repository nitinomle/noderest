'use strict';

module.exports = function (app)
{
	var userList = require('../controllers/userListController.js');

	app.route('/users')
	    .get(userList.getAllUser)
	    .post(userList.createUser);

	app.route('/users/:userId')
    .get(userList.getUser);

};