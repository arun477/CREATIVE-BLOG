//IMPORTING SENSITIVE INFORMATION FROM CONFIG FILE
let configValues = require('./config.json');
console.log(configValues);

//EXPORT MONGODB SERVER LINK
module.exports = {
	dbConnection : function(){
		return "mongodb://"+configValues.uname+":"+configValues.pwd+"@ds151963.mlab.com:51963/coolblog";
		
	}
}