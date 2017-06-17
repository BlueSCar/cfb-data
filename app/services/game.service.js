var rp = require('request-promise');

exports.getPlayByPlay = (id, callback) => {
    var data = {};
    var baseUrl = 'http://cdn.espn.com/core/college-football/playbyplay';
    var queryParams = {
        gameId: id,
        xhr: 1,
        render: 'false',
        userab: 18
    };

    var promise = rp({
            url: baseUrl,
            qs: queryParams,
            json: true
        })
        .then((data) => {
            var game = {
                scoringPlays: data.gamepackageJSON.scoringPlays,
                videos: data.gamepackageJSON.videos,
                drives: data.gamepackageJSON.drives,
                teams: data.gamepackageJSON.header.competitions[0].competitors,
                id: data.gamepackageJSON.header.id,
                competitions: data.gamepackageJSON.header.competitions,
                season: data.gamepackageJSON.header.season,
                week: data.gamepackageJSON.header.week
            };

            return game;
        })
        .catch((error) => {
            console.log(error);
        });

    if (callback) {
        return promise.then(callback);
    } else {
        return promise;
    }
};

exports.getBoxScore = (id, callback) => {
    var baseUrl = 'http://cdn.espn.com/core/college-football/boxscore';
    var queryParams = {
        gameId: id,
        xhr: 1,
        render: false,
        device: 'desktop',
        userab: 18
    };

    var promise = rp({
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

    if (callback) {
        return promise.then(callback);
    } else {
        return promise;
    }
};