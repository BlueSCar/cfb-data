var request = require('request');

exports.getRankings = function(inputs, callback) {
    var baseUrl = 'http://cdn.espn.com/core/college-football/rankings/_/seasontype/' + (inputs.seasontype || 2) + '/year/' + inputs.year + '/week/' + inputs.week;
    var queryParams = {
        xhr: 1,
        render: false,
        device: 'desktop',
        userab: 18
    };

    request({
        url: baseUrl,
        qs: queryParams
    }, function(error, response, body) {
        if (!error) {
            var data = JSON.parse(body);
            callback(data.content.data.rankings);
        } else {
            console.log(error);
        }
    });
};