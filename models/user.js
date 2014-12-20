var assert = require("assert");

var User = function(args){

    var user = {};
    user.email = args.email;
};

module.exports = User