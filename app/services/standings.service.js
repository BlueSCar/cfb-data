const axios = require('axios');

exports.getStandings = async ({
    year = new Date().getFullYear(),
    type = 'fbs'
}) => {
    const baseUrl = `http://cdn.espn.com/core/college-football/standings/_/season/${year}/view/${type}`;

    const params = {
        xhr: 1,
        render: false,
        device: 'desktop',
        userab: 18
    };

    const res = await axios.get(baseUrl, {
        params
    });

    return res.content.standings.groups;
};