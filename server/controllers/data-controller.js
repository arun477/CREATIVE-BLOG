//THIS MODULE USED ONLY FOR THE FIRST TIME SEEDING 
let blogModel = require('./../models/model');
let seed = require('./../models/mongo-seed.json');


//EXPORTING INITIAL SEEDING FUNCTION
module.exports = function(app){
	app.get('/seed', function(req,res){
        //seeding the data to the mongo database
        blogModel.create(seed, function(err, docs){
        	res.send(docs);
        });

    })

}




