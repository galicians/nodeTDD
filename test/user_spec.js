var should = require('should');
var User = require('../models/user');

describe("User", function() {

    describe("by default", function(){
        var user = {};

        before(function() {
            user = new User({email : "galicians@gmail.com"})
        });

        it("email is galicians@gmail.com", function() {
            user.email.should.equal("galicians@gmail.com");
        });

        it("has and authentication token");
        it("has a pending status");
        it("has a created date");
        it("has a signInCount of 0");
        it("has lastLogin");
        it("has currentLogin");
        it("has a sessionToken");
        it("has a reminder Token");
        it("has a reminder sent date");
    });
});