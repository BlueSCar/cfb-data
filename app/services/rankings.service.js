const axios = require('axios');

exports.getRankings = async ({
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

    const res = await axios.get(baseUrl, {
        params: qs
    });

    return res.data;
};