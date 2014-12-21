
var Application = function(args){

    var app = {};
    app.email = args.email;
    app.password = args.password;
    app.confirm = args.confirm;
    app.status = "pending";
    app.message = null;

    return app;
    
};

module.exports = Application