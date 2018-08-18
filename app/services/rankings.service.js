const rp = require('request-promise');

exports.getRankings = ({
    year,
    week,
    seasontype
}) => {
    const baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/rankings';

    return rp({
            url: baseUrl,
            qs: {
                seasons: year,
                weeks: week,
                types: seasontype
            },
            json: true
        })
        .catch((error) => {
            console.log(error);
        });
};