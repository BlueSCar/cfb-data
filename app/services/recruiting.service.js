var rp = require('request-promise');
var cheerio = require('cheerio');

exports.getPlayerRankings = (options) => {
    let baseUrl = `http://247sports.com/Season/${options.year}-Football/CompositeRecruitRankings`;
    let queryParams = {
        InstitutionGroup: options.group || "HighSchool",
        Page: options.page || 1
    };

    if (options.position) {
        queryParams["Position"] = options.position
    } else if (options.state) {
        queryParams["State"] = options.state
    }

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
                    college: html.find(".jsonly").prop("title") || "uncommitted"
                }

                players.push(player);
            });

            return players;
        })
        .error((error) => {
            console.log(error);
        });
};

exports.getSchoolRankings = (year) => {
    let baseUrl = `http://247sports.com/Season/${year}-Football/CompositeTeamRankings`;

    return rp({
            url: baseUrl,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
            }
        })
        .then((body) => {
            let $ = cheerio.load(body);
            console.log(body);
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
    let baseUrl = `http://${school}.247sports.com/Season/${year}-Football/Commits`;

    return rp({
            url: baseUrl,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
            }
        })
        .then((body) => {
            let $ = cheerio.load(body);

            let players = [];

            $(".rankingcmp_lst > li:not([class])").each(function (index) {
                let html = $(this);

                let player = {
                    name: html.find(".playerinfo_blk a.name").text().trim(),
                    highSchool: html.find(".playerinfo_blk span.meta").text().trim(),
                    position: html.find(".playerinfo_blk .position").text().trim(),
                    height: html.find(".playerinfo_blk .height").text().trim(),
                    weight: html.find(".playerinfo_blk .weight").text().trim(),
                    stars: html.find(".playerinfo_blk .rating > .yellow").length,
                    rating: html.find(".playerinfo_blk .rating").clone().children().remove().end().text().trim(),
                    nationalRank: html.find(".playerinfo_blk .natrank").first().text().trim(),
                    stateRank: html.find(".playerinfo_blk .sttrank").first().text().trim(),
                    positionRank: html.find(".playerinfo_blk .posrank").first().text().trim()
                }

                players.push(player);
            });

            return players;
        })
        .error((error) => {
            console.log(error);
        });
};