var rp = require('request-promise');

exports.getRankings = (inputs, callback) => {
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