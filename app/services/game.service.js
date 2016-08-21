var request = require('request');

exports.getPlayByPlay = function(id, callback) {
    var data = {};
    var baseUrl = 'http://cdn.espn.com/core/college-football/playbyplay';
    var queryParams = {
        gameId: id,
        xhr: 1,
        render: 'false',
        userab: 18
    };

    request({
        url: baseUrl,
        qs: queryParams
    }, function(error, response, body) {
        if (!error) {
            var data = JSON.parse(body);

            data.scoringPlays = data.gamepackageJSON.scoringPlays;
            data.videos = data.gamepackageJSON.videos;
            data.drives = data.gamepackageJSON.drives;
            data.teams = data.gamepackageJSON.header.competitions[0].competitors;

            callback(data);
        } else {
            console.log(error);
        }
    });
};

exports.getBoxScore = function(id, callback){
    var baseUrl = 'http://cdn.espn.com/core/college-football/boxscore';
    var queryParams = {
        gameId: id,
        xhr: 1,
        render: false,
        device: 'desktop',
        userab: 18
    };

    request({
        url: baseUrl,
        qs: queryParams
    }, function(error, response, body) {
        if (!error){
            var data = JSON.parse(body);

            callback(data.gamepackageJSON.boxscore);
        } else {
            console.log(error);
        }
    });
};