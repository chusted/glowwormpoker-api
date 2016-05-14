var mongoose = require('mongoose');

var jiraSchema = mongoose.Schema({
    name: { type: String, unique: true},
    description: String,
    createdBy: String
});

module.exports = mongoose.model('Jira', jiraSchema);