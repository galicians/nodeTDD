var User = require("../models/user");
var Application = require("../models/application")

var RegResult = function(){

    var result = {
        sucess : false,
        message : null,
        user : null

    };

    return result;

};

var validateInputs = function(app){

    //email and password need to be present
    if(!app.email || !app.password){
        app.setInvalid("Email and password are required");
    }else if(app.password != app.confirm){
        app.setInvalid("Passwords don't match")
    }
}

exports.applyForMembership = function(args){
    var regResult = new RegResult();

    var app = new Application(args);

    validateInputs(app)

    //sucess
    regResult.success = true;
    regResult.message = "Welcome!";
    
    regResult.user = new User(args);

    return regResult;
};