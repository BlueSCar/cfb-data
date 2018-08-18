var chai = require('chai');
var app = require('../app/app');
var should = chai.should();

describe('Games', () => {
    var gameId = 400763535;

    it('should populate play by play data for the given game id', (done) => {
        app.games.getPlayByPlay(gameId).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.should.not.be.empty;
            done();
        });
    });

    it('should return a promise for play by play data for the given game id', (done) => {
        app.games.getPlayByPlay(gameId)
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });

    it('should populate box score data for the given game id', (done) => {
        app.games.getBoxScore(gameId).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.id.should.exist;
            data.should.not.be.empty;
            done();
        });
    });

    it('should return a promise for box score data for the given game id', (done) => {
        app.games.getBoxScore(gameId)
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                data.id.should.exist;
                done();
            });
    });

    it('should return a promise for game summary data for the given game id', (done) => {
        app.games.getSummary(gameId)
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });
});

describe('Rankings', () => {
    it('should populate rankings for the current week and year', (done) => {
        app.rankings.getRankings({}).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.should.not.be.empty;
            done();
        });
    });

    it('should populate rankings for the given week and year', (done) => {
        app.rankings.getRankings({
            year: 2015,
            week: 5
        }).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.should.not.be.empty;
            done();
        });
    });

    it('should return a promise for rankings for the current week and year', (done) => {
        app.rankings.getRankings({})
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });

    it('should return a promise for rankings for the given week and year', (done) => {
        app.rankings.getRankings({
                year: 2015,
                week: 5
            })
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });
});

describe('Scoreboard', () => {
    it('should populate scoreboard data for the current week and year', (done) => {
        app.scoreboard.getScoreboard({}).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.should.not.be.empty;
            done();
        });
    });

    it('should populate scoreboard data for the given week and year', (done) => {
        app.scoreboard.getScoreboard({
            year: 2015,
            week: 5
        }).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.should.not.be.empty;
            done();
        });
    });

    it('should return a promise for scoreboard data for the current week and year', (done) => {
        app.scoreboard.getScoreboard({})
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });

    it('should return a promise for scoreboard data for the given week and year', (done) => {
        app.scoreboard.getScoreboard({
                year: 2015,
                week: 5
            })
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });
});

describe('Standings', () => {
    it('should populate standings for the given year', (done) => {
        app.standings.getStandings({
            year: 2015
        }).then((data) => {
            data.should.exist;
            data.should.be.json;
            data.should.not.be.empty;
            done();
        });
    });

    it('should return a promise for standings for the given year', (done) => {
        app.standings.getStandings({
                year: 2015
            })
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            });
    });
});

describe('Recruiting', () => {
    it('should return a promise for a list of individual rankings for the given year', (done) => {
        app.recruiting.getPlayerRankings({
                year: 2016
            })
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            })
    });

    it('should return a promise for a list of individual rankings for the given year and position', (done) => {
        app.recruiting.getPlayerRankings({
                year: 2016,
                position: "DT"
            })
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            })
    });

    it('should return a promise for a list of individual rankings for the given year and group', (done) => {
        app.recruiting.getPlayerRankings({
                year: 2016,
                group: "JuniorCollege"
            })
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            })
    });

    it('should return a promise for a list of school rankings for the given year', (done) => {
        app.recruiting.getSchoolRankings(2016)
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            })
    });

    it('should return a promise for a school\'s commit list for a given year', (done) => {
        app.recruiting.getSchoolCommits('michigan', 2016)
            .then((data) => {
                data.should.exist;
                data.should.be.json;
                data.should.not.be.empty;
                done();
            })
    });
});