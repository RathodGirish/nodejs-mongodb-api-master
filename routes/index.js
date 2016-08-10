var model= require('../models/model');
var ADMIN_COLLECTION = model.admin;
var CATEGORY_collection=model.category;
var url  = require('url');
var json={};
var fs = require("fs");
var querystring = require('querystring');
var ObjectID = require('mongodb').ObjectID;
var session = require('client-sessions');

/*-------------------------------------------------------*/
exports.apiview 			= _apiview;
/*-------------------------------------------------------*/

/*
TODO:To open API view.
*/
function _apiview(req,res,next){
		res.render('apiview');
}