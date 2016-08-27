var request = require('request');

exports.getScoreboard = function(inputs, callback) {
    var baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard';
    var queryParams = {};

    if (inputs && inputs.year) {
        queryParams.dates = inputs.year;
    }

    if (inputs && inputs.week) {
        queryParams.week = inputs.week;
    }

    if (inputs && inputs.groups) {
        queryParams.groups = inputs.groups;
    }

    if (inputs && inputs.seasontype) {
        queryParams.seasontype = inputs.seasontype;
    }

    queryParams.limit = 300;

    request({
        url: baseUrl,
        qs: queryParams
    }, function(error, response, body) {
        if (!error) {
            var data = JSON.parse(body);

            callback(data);
        } else {
            console.log(error);
        }
    });
};