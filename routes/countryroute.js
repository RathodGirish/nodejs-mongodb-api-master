var model= require('../models/model');
var COUNTRY_COLLECTION=model.country;
var ObjectID = require('mongodb').ObjectID;
var INITIAL_INVENTORY_CONTRY_COLLECTION = model.initial_inventory_country;
var PRODUCT_COLLECTION=model.product;

/*-------------------------------------------------------*/
exports.getCountries = _getCountries;
/*-------------------------------------------------------*/

/*
TODO:To Get All Countries.
*/
function _getCountries(req,res,next){
	var json={};
	var query = {is_deleted:false};	
	COUNTRY_COLLECTION.find(query, function(error,allcountry){
		if(error){
			json.status = '0';
			json.result = {'Error':'Error in Retreving Countries By Country'};
			res.send(json);
		}else{
			json.status = '1';
			json.result = allcountry;
			res.send(json);	
		}
	});
}

