const rp = require('request-promise');

exports.getStandings = ({
    year = new Date().getFullYear(),
    type = 'fbs'
}) => {
    const baseUrl = `http://cdn.espn.com/core/college-football/standings/_/season/${year}/view/${type}`;

    const queryParams = {
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
            return data.content.standings.groups;
        })
        .catch((error) => {
            console.log(error);
        });
};