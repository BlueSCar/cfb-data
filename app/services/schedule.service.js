let rp = require('request-promise');

let getSchedule = (inputs) => {
    let baseUrl = 'http://cdn.espn.com/core/college-football/schedule';
    let queryParams = {};

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

    queryParams.xhr = 1;

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
    getSchedule: getSchedule
}