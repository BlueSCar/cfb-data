const rp = require('request-promise');

exports.getScoreboard = ({year = null, week = null, groups = 80, seasontype = null, limit = 300}) => {
    const baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard';
    const queryParams = {
        dates: year,
        week,
        groups,
        seasontype,
        limit
    };

    return rp({
            url: baseUrl,
            qs: queryParams,
            json: true
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.getConferences = () => {
    const baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard/conferences';

    return rp({
        url: baseUrl,
        json: true
    });
};