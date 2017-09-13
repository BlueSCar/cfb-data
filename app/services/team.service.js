let rp = require('request-promise');

let getTeamList = (inputs) => {
    let baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams';
    let queryParams = {};

    if (knputs && inputs.groups){
        queryParams.groups = inputs.groups
    }

    return rp({
        url: baseUrl,
        qs: queryParams,
        json: true
    });
}

let getTeamInfo = (id) => {
    let baseUrl = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${id}`;
    
        return rp({
            url: baseUrl,
            json: true
        });
}

let getTeamPlayers = (id) => {
    let baseUrl = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${id}`;
    let queryParams = {
        enable: "roster"
    };

    return rp({
        url: baseUrl,
        qs: queryParams,
        json: true
    });
}

module.exports = {
    getTeamList: getTeamList,
    getTeamInfo: getTeamInfo,
    getTeamPlayers: getTeamPlayers
}