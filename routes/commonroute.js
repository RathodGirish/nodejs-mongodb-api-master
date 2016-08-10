var model=require('../models/model');
var ObjectID = require('mongodb').ObjectID;

/*-------------------------------------------------------*/
exports.getCurrentDate 			= _getCurrentDate;
exports.getCurrentDateDDMMYYYY 	= _getCurrentDateDDMMYYYY;
exports.isValidId 				= _isValidId;
exports.invalidIdMessage 		= _invalidIdMessage;
exports.getCurrentDate      	= _getCurrentDate;
/*-------------------------------------------------------*/

/*
TYPE:GET
TODO: To return current date
*/
function _getCurrentDate() {
    /*-------------Current Date-------------*/
    return new Date();
};

/*
TYPE:GET
TODO: To return current date with dd-mm-yyyy format
*/
function _getCurrentDateDDMMYYYY() {
    /*-------------Current Date-------------*/
    var d = new Date();
	var curr_date = d.getDate();
	var curr_month = d.getMonth();
	var curr_year = d.getFullYear();
	var result_date = curr_date + "/" + (curr_month + 1) 
	+ "/" + curr_year;
	return result_date;
};

var id_regex = new RegExp("^[0-9a-fA-F]{24}$");

/*
TYPE:GET
TODO: To check id is valid or not.
*/
function _isValidId(id) {
	if(typeof id != 'undefined' && id!=""){
		return id_regex.test(id);
	} else {
		return false;
	}
}

/*
TYPE:GET
TODO: To return message on invalid id.
*/
function _invalidIdMessage(req, res, status, resource, id) {
    var json = {};
    json.status = status;
    json.result = {};
    json.result.error = 'Invalid Id ' + id + ' of ' + resource;
    res.send(json, 200);
}
