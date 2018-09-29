const rp = require('request-promise');

const getTeamList = ({
    groups = 80
}) => {
    const baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams';
    const queryParams = {
        groups,
        limit: 1000
    };

    return rp({
        url: baseUrl,
        qs: queryParams,
        json: true
    });
}

const getTeamInfo = (id) => {
    const baseUrl = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${id}`;

    return rp({
        url: baseUrl,
        json: true
    });
}

const getTeamPlayers = (id) => {
    const baseUrl = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${id}`;
    const queryParams = {
        enable: "roster"
    };

    return rp({
        url: baseUrl,
        qs: queryParams,
        json: true
    });
}

module.exports = {
    getTeamList,
    getTeamInfo,
    getTeamPlayers
}