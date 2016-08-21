var request = require('request');

exports.getScoreboard = function(inputs, callback) {
    var scoreboard = {};
    var baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard';
    var queryParams = {
        lang: 'en',
        region: 'us',
        calendartype: 'blacklist',
        limit: inputs.limit || 300,
        dates: inputs.year,
        seasontype: inputs.seasontype || 2,
        week: inputs.week,
        groups: inputs.groups || 80
    };

    request({
        url: baseUrl,
        qs: queryParams
    }, function(error, response, body) {
        if (!error) {
            var data = JSON.parse(body);

            scoreboard.groups = data.groups;
            scoreboard.year = data.season.year;
            scoreboard.seasonType = data.season.type;
            scoreboard.week = data.week.number;
            scoreboard.games = [];

            data.events.forEach(function(event) {
                var game = {
                    data: event.competitions[0],
                    links: event.links,
                    status: event.status
                };

                scoreboard.games.push(game);
            });

            callback(scoreboard);
        } else {
            console.log(error);
        }
    });
};