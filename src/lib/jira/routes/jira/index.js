 var jiras = require('./jiras')();

module.exports = function (router) {

    router.route('/ping')
        .get(ping);

    router.route('/jiras')
        .get(jiras.getJiras);

    router.route('/jiras')
        .post(jiras.createJira);
   
};

var ping = function (req, res) { 
    res.send('Jira is still here, sucka.'); 
};