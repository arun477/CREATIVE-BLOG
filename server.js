'use strict'

//IMPORTING ALL REQUIRED MODULES
let express = require('express');
let mongoose = require('mongoose');
let fs = require('fs');
let config = require('./server/config');
let app = express();
let apiController = require('./server/controllers/api-controller');
let dataController = require('./server/controllers/data-controller');
let port = process.env.PORT || 3000;

//DEFINE STATIC FILE FOLDER
app.use(express.static(__dirname+'/client'));


//MAKE CONNECTION TO DATABASE
mongoose.connect(config.dbConnection());


//CREATING API END POINTS 
apiController(app);


//LISTENING TO THE PORT 
app.listen(port,()=>console.log(`app is listening on port : ${port}`));

