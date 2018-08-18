const rp = require('request-promise');
const cheerio = require('cheerio');

exports.getPlayerRankings = ({year, page = 1, group = "HighSchool", position, state}) => {
    const baseUrl = `http://247sports.com/Season/${year}-Football/CompositeRecruitRankings`;
    const queryParams = {
        InstitutionGroup: group,
        Page: page,
        Position: position,
        State: state
    };

    return rp({
            url: baseUrl,
            qs: queryParams,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
            }
        })
        .then((body) => {
            let $ = cheerio.load(body);

            let players = [];

            $("ul.content-list > li:not([class])").each(function (index) {
                let html = $(this);

                let player = {
                    ranking: html.find(".primary").text().trim(),
                    name: html.find(".name a").text().trim(),
                    highSchool: html.find("span.meta").text().trim(),
                    position: html.find(".position").text().trim(),
                    height: html.find(".height").text().trim(),
                    weight: html.find(".weight").text().trim(),
                    stars: html.find(".rating > .yellow").length,
                    rating: html.find(".rating").text().trim().trim(),
                    college: html.find(".right-content .jsonly").prop("title") || "uncommitted"
                }

                players.push(player);
            });

            return players;
        })
        .error((error) => {
            console.log(error);
        });
};

exports.getSchoolRankings = (year, page = 1) => {
    const baseUrl = `http://247sports.com/Season/${year}-Football/CompositeTeamRankings`;

    return rp({
            url: baseUrl,
            qs: {
                Page: page
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
            }
        })
        .then((body) => {
            let $ = cheerio.load(body);
            let schools = [];

            $("ul.team-rankings-index > li:not([class])").each(function (index) {
                let html = $(this);

                let school = {
                    rank: html.find(".rank .primary").text().trim(),
                    school: html.find(".name").text().trim(),
                    totalCommits: html.find(".metrics-list a").text().replace('Total: ', '').trim(),
                    fiveStars: $(html.find(".metrics-list li")[1]).text().replace("5: ", "").trim(),
                    fourStars: $(html.find(".metrics-list li")[2]).text().replace("4: ", "").trim(),
                    threeStars: $(html.find(".metrics-list li")[3]).text().replace("3: ", "").trim(),
                    averageRating: $(html.find(".metrics-list li")[4]).text().replace("Avg: ", "").trim(),
                    points: html.find('.number').text().trim()
                }

                schools.push(school);
            });

            return schools;
        })
        .error((error) => {
            console.log(error);
        });
};

exports.getSchoolCommits = (school, year) => {
    const baseUrl = `http://${school}.247sports.com/Season/${year}-Football/Commits`;

    return rp({
            url: baseUrl,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
            }
        })
        .then((body) => {
            let $ = cheerio.load(body);

            let players = [];

            $(".ri-list > li:not([class])").each(function (index) {
                let html = $(this);

                let player = {
                    name: html.find(".list-data a.name").text().trim(),
                    highSchool: html.find(".list-data span.meta").text().trim(),
                    position: $(html.find(".metrics-list li")[0]).text().trim(),
                    height: $(html.find(".metrics-list li")[1]).text().trim(),
                    weight: $(html.find(".metrics-list li")[2]).text().trim(),
                    stars: html.find(".list-data .rating .star > .icon-starsolid.yellow").length,
                    rating: html.find(".list-data .rating .score").clone().children().remove().end().text().trim(),
                    nationalRank: html.find(".list-data .natrank").first().text().trim(),
                    stateRank: html.find(".list-data .sttrank").first().text().trim(),
                    positionRank: html.find(".list-data .posrank").first().text().trim()
                }

                players.push(player);
            });

            return players;
        })
        .error((error) => {
            console.log(error);
        });
};