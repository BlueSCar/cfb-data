const rp = require('request-promise');

const getSchedule = ({
    year,
    week,
    groups,
    seasontype
}) => {
    const baseUrl = 'http://cdn.espn.com/core/college-football/schedule';
    const queryParams = {
        dates: year,
        week,
        groups,
        seasontype: seasontype,
        xhr: 1
    };

    return rp({
            url: baseUrl,
            qs: queryParams,
            json: true
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = {
    getSchedule
}