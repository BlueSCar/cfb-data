var request = require('request');

exports.getRankings = function(inputs, callback) {
    var baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/rankings';
    var queryParams = {};

    if (inputs && inputs.year) {
        queryParams.seasons = inputs.year;
    }

    if (inputs && inputs.week) {
        queryParams.weeks = inputs.week;
    }

    if (inputs && inputs.seasontype) {
        queryParams.types == inputs.seasontype;
    }

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