var request = require('request');

exports.getStandings = function(inputs, callback) {
    var baseUrl = 'http://cdn.espn.com/core/college-football/standings/_/season/' + (inputs.year || new Date().getFullYear()) + '/view/' + (inputs.type || 'fbs');

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
            callback(data.content.standings.groups);
        } else {
            console.log(error);
        }
    });
};