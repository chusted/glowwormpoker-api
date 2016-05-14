
// var router = require('./routes')();

module.exports = function(app, io) {

    // TODO how to do routes with params? I have no idea what I'm doing here
    // var message = {
    //     router: router
    // };

    // return message;
    
    var messages = io.on('connection', function (socket) {
        socket.on('message', function(msg){
            io.emit('message', msg);
        });
    });
};
