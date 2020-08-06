const axios = require('axios');

const getTeamList = async ({
    groups = 80
}) => {
    const baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams';
    const params = {
        groups,
        limit: 1000
    };

    const res = await axios.get(baseUrl, {
        params
    });

    return res.data;
}

const getTeamInfo = async (id) => {
    const baseUrl = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${id}`;

    const res = await axios.get(baseUrl);
    return res.data;
}

const getTeamPlayers = async (id) => {
    const baseUrl = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${id}`;
    const params = {
        enable: "roster"
    };

    const res = await axios.get(baseUrl, {
        params
    });

    return res.data;
}

module.exports = {
    getTeamList,
    getTeamInfo,
    getTeamPlayers
}