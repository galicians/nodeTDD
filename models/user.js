var assert = require("assert");

var User = function(args){
    assert.ok(args.email, "Email is required");
    var user = {};
    user.email = args.email;
    user.createdAt = args.createdAt || new Date();
    user.status = args.status || "pending";
    user.signInCount = args.signInCount || 0;
    user.currentLoginAt = args.currentLoginAt || new Date();
    user.lastLoginAt = args.lastLogin || new Date();
    user.currentSessionToken = args.currentSessionToken || null;
    user.reminderSentAt = args.reminderSentAt || null;
    user.reminderToken = args.reminderToken || null;

    return user;
};

module.exports = User