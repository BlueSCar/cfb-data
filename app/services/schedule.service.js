const axios = require('axios');

const getSchedule = async ({
    year = null,
    week = null,
    groups = null,
    seasontype = null
}) => {
    const baseUrl = 'http://cdn.espn.com/core/college-football/schedule';
    const params = {
        dates: year,
        week,
        group: groups,
        seasontype: seasontype,
        xhr: 1
    };

    const res = await axios.get(baseUrl, {
        params
    });
    return res.data;
}

module.exports = {
    getSchedule
}