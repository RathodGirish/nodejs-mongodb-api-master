var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Collection user
var admin = new Schema({
	first_name 	:  	String,
	last_name  	:  	String,
	email     	:  	String,
	password  	:  	String,
	city      	:  	String,
	state     	:  	String,
	country   	:  	String,
	role      	:   String
}, { collection: 'admin' });
exports.admin = mongoose.model('admin' , admin);

//Collection user
var user=new Schema({
	first_name				:String,
	last_name				:String,
	email					:String,
	gender					:String,
	country					:String,
	state					:String,
	city 					:String,
	creation_date			:String,
	status 					:String,
	employer				:String,
	position				:String,
	mobile_no				:String,
	clinic_name				:String
}, { collection: 'user' });
exports.user=mongoose.model('user',user);

//Collection country
var country= new Schema({
	country_name	:String
}, { collection: 'country' });
exports.country=mongoose.model('country',country);
