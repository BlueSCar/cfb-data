const rp = require('request-promise');

exports.getRankings = ({
    year = null,
    week = null,
    seasontype = null
}) => {
    const baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/rankings';
    const qs = {};

    if (year) {
        qs.seasons = year;
    }

    if (week) {
        qs.weeks = week;
    }

    if (seasontype) {
        qs.types = seasontype;
    }

    return rp({
            url: baseUrl,
            qs,
            json: true
        })
        .catch((error) => {
            console.log(error);
        });
};