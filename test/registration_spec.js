var Registration = require("../lib/registration");

describe("Registration", function(){

    describe("a valid application", function() {
        var regResult = {};
        before(function () {
            regResult = Registration.applyForMembership({email : "galicians@gmail.com"})
        });
        it("is successful");
        it("creates a user");
        it("creates a log entry");
        it("sets the user's sttus to approved");
        it("offers a welcome message");
    });

    describe("an empty or null email", function() {
        it("is not successful");
        it("tells user that email is required");
    });

    describe("empty or null password", function() {
        it("is not successful");
        it("tells user that password is required");
    });

    describe("password and confirm missmatch", function() {
        it("is not successful");
        it("tells user passwords don't match");
    });

    describe("email already exists", function() {
        it("is not successful");
        it("tells user that email already exists");
    });
})