var rp = require('request-promise');

exports.getScoreboard = (inputs, callback) => {
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

    queryParams.limit = 900;

    var promise = rp({
            url: baseUrl,
            qs: queryParams,
            json: true
        })
        .catch((error) => {
            console.log(error);
        });

    if (callback) {
        return promise.then(callback);
    } else {
        return promise;
    }
};

exports.getConferences = () => {
    let baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard/conferences';

    return rp({
        url: baseUrl,
        json: true
    });
};