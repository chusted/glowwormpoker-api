
var router = require('./routes')();

module.exports = function() {

    var jira = {
        router: router
    };

    return jira;

};
