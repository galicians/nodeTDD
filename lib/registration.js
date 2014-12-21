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

exports.applyForMembership = function(args){
    var regResult = new RegResult();

    var app = new Application(args);



    //sucess
    regResult.success = true;
    regResult.message = "Welcome!";
    
    regResult.user = new User(args);

    return regResult;
};