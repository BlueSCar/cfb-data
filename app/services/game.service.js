const rp = require('request-promise');

exports.getPlayByPlay = (id) => {
    const baseUrl = 'http://cdn.espn.com/core/college-football/playbyplay';
    const queryParams = {
        gameId: id,
        xhr: 1,
        render: 'false',
        userab: 18
    };

    return rp({
            url: baseUrl,
            qs: queryParams,
            json: true
        })
        .then((data) => {
            return {
                scoringPlays: data.gamepackageJSON.scoringPlays,
                videos: data.gamepackageJSON.videos,
                drives: data.gamepackageJSON.drives,
                teams: data.gamepackageJSON.header.competitions[0].competitors,
                id: data.gamepackageJSON.header.id,
                competitions: data.gamepackageJSON.header.competitions,
                season: data.gamepackageJSON.header.season,
                week: data.gamepackageJSON.header.week
            };
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.getBoxScore = (id) => {
    const baseUrl = 'http://cdn.espn.com/core/college-football/boxscore';
    const queryParams = {
        gameId: id,
        xhr: 1,
        render: false,
        device: 'desktop',
        userab: 18
    };

    return rp({
            url: baseUrl,
            qs: queryParams,
            json: true
        })
        .then((data) => {
            var game = data.gamepackageJSON.boxscore;
            game.id = data.gameId;

            return game;
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.getSummary = (id) => {
    const baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/summary';
    const queryParams = {
        event: id
    };

    return rp({
            url: baseUrl,
            qs: queryParams,
            json: true
        })
        .catch((error) => {
            console.log(error);
        });
};