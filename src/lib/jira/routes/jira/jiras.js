var Jira = require('../../models/models/jira');

 module.exports = function(router) {
     
     var jira = {
         getJiras: getJiras,
         createJira: createJira
     };
     
     return jira;
 };
 
 var getJiras = function (req, res, next) {
     Jira.find()
        .exec(function(err, jira) {
            if (err) {
                return next(err);
            }
            res.json(jira);
        });
 };
 
 var createJira = function (req, res, next) {
     var jira = new Jira();
     jira.name = req.body.jira.name;
     jira.description = req.body.jira.description;
     jira.createdBy = req.body.jira.createdBy;
     console.log(jira);
     jira.save(function(err) {
            if(err) {
                return next(err);
            }
            res.json({success:true});
        });
 };
