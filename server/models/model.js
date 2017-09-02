let mongoose = require('mongoose');


//CREATE THE SCHEMA 
let Schema = mongoose.Schema;

//DEFINE STRUCTURE OF DATA 
let dataTemplate = new Schema({
	author:String,
	authorImg:{data:Buffer, contentType:String},
	title:String,
	contentBody:String,
	contentImg:{data:Buffer, contentType:String},
	date:Date,
	comments:[{name:String,body:String}],
	likes:Number,
	dislikes:Number

});

//DEFINE MODEL OF YOUR DATA
let blogModel = mongoose.model('blogModel', dataTemplate);

//EXPORT OUR MODEL
module.exports = blogModel;

