/*
*	Module dependencies
*/
var express     = 	   require('express');
var http 	    = 	   require('http');
var path        =  	   require('path');
var util 	    =      require('util');
var bodyParser  =      require('body-parser');
var jsonParser  =      bodyParser.json();
var logger      =      require('morgan');
var mongoose    =      require('mongoose');
var database    =      require('./config/database'); 	// Get configuration file
var static      =      require( 'serve-static' );
var app         =      express();
var routes      =      require('./routes');
var session 	= 	   require('client-sessions');

var config = require('./config/config.json');
//Connection with Database
mongoose.connect(database.url);
var db = mongoose.connection;
//app.engine('jade',engine);
app.set('port', process.env.PORT || config.api_server_port);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use( static( path.join( __dirname, 'public' )));
app.use(express.json());
app.use(express.logger('dev'));
app.use(express.multipart());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('secret'));
app.use(express.session());

/*-----------------------All Routes List---------------------------------*/
var commonroute 				= require('./routes/commonroute');
var userroute	  				= require('./routes/userroute');
var countryroute 				=require('./routes/countryroute');

/*------------------------------Common Routes--------------------------*/ 
app.get('/getCurrentDate',commonroute.getCurrentDate);
app.get('/getCurrentDateDDMMYYYY',commonroute.getCurrentDateDDMMYYYY);
app.get('/isValidId', commonroute.isValidId);
app.get('/invalidIdMessage', commonroute.invalidIdMessage);


/*---------------------------User Routes------------------------------*/
app.post('/adduser',userroute.adduser);
app.get('/getUsers',userroute.getUsers);

/*----------------------------Country Route----------------------------------------*/
app.get('/getCountries',countryroute.getCountries);

app.get('/',routes.apiview);

//It Will Start Server on PORT-8070
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
