var model=require('../models/model');
var USER_COLLECTION=model.user;
var CLINIC_COLLECTION=model.clinic;
var url  = require('url');
var json={};
var fs = require("fs");
var querystring = require('querystring');
var ObjectID = require('mongodb').ObjectID;

/*-------------------------------------------------------*/
exports.adduser				= _adduser;
exports.getUsers 			= _getUsers;
/*-------------------------------------------------------*/

/*
TODO:To add new user.
*/
function _adduser(req,res,next){
	var person_type= req.body.txtfirstname;
	var first_name				=req.body.first_name;			
	var last_name				=req.body.last_name;
	var email					=req.body.email;	
	var gender					=req.body.gender;
	var country					=req.body.country;
	var state					=req.body.state;		
	var city 					=req.body.city;		
	var user_type				=req.body.user_type;		
	var user_sub_type			=req.body.user_sub_type;		
	var person_type				=req.body.person_type;		
	var first_year_registration	=req.body.first_year_registration;
	var status 					='Active';
	var employer				=req.body.employer;
	var position				=req.body.position;
	var mobile_no				=req.body.mobile_no;
	var clinic_name 			=req.body.clinic_name;
	/*-------CreationDate Logic--------*/
	var creationdate = new Date();
	var dd = creationdate.getDate();
	var mm = creationdate.getMonth()+1; //January is 0!
	var yyyy = creationdate.getFullYear();
	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 
	creationdate = dd+'/'+mm+'/'+yyyy;
	/*----------------------------------*/

	if(typeof person_type!='undefined' && person_type=='Treating Patients'){
		var user = new USER_COLLECTION({
			first_name				:first_name,
			last_name				:last_name,
			email					:email,
			gender					:gender,
			country					:country,
			state					:state,
			city 					:city,
			user_type				:user_type,
			user_sub_type			:user_sub_type,
			person_type				:person_type,
			first_year_registration	:first_year_registration,
			creation_date			:creationdate,
			status 					:status,
			employer				:'-',
			position				:'-',
			mobile_no				:mobile_no,
			clinic_name				:clinic_name
		});
	
		user.save(function(error,user){
			if(error){
				json.status='0';
				json.result={'error':'Error In Adding New User'};
				res.send(json);
			}else{
				json.status='1';
				json.result=user;
				res.send(json);
			}
		});

	} else {
		var user = new USER_COLLECTION({
			
			first_name				:first_name,
			last_name				:last_name,
			email					:email,
			gender					:gender,
			country					:country,
			state					:'-',
			city 					:'-',
			user_type				:'-',
			user_sub_type			:'-',
			person_type				:person_type,
			first_year_registration	:'-',
			creation_date			:creationdate,
			status 					:status,
			employer				:employer,
			position				:position,
			mobile_no				:mobile_no,
			clinic_name				:'-'
		});
	
		user.save(function(error,user){
			if(error){
				json.status='0';
				json.result={'error':'Error In Adding New User'};
				res.send(json);
			}else{
				json.status='1';
				json.result=user;
				res.send(json);
			}
		});
	}
}


/*
TODO:To Get All Users.
*/
function _getUsers(req,res,next){
	var json={};
	var query = {is_deleted:false};	
	USER_COLLECTION.find(query, function(error,allusers){
		if(error){
			json.status = '0';
			json.result = {'Error':'Error in Retreving User'};
			res.send(json);
		}else{
			json.status = '1';
			json.result = allusers;
			res.send(json);	
		}
	});
}

