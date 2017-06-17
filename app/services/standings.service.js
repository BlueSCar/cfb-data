var rp = require('request-promise');

exports.getStandings = (inputs, callback) => {
    var baseUrl = 'http://cdn.espn.com/core/college-football/standings/_/season/' + (inputs.year || new Date().getFullYear()) + '/view/' + (inputs.type || 'fbs');

    var queryParams = {
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
            return data.content.standings.groups;
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