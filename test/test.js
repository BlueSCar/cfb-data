var chai = require('chai');
var app = require('../app/app');
var should = chai.should();

describe('Games', function() {
    var gameId = 400763535;

    it('should populate play by play data for the given game id', function(done) {
        app.games.getPlayByPlay(gameId, function(data) {
            data.should.exist;
            data.should.be.json;
            done();
        });
    });

    it('should populate box score data for the given game id', function(done) {
        app.games.getBoxScore(gameId, function(data) {
            data.should.exist;
            data.should.be.json;
            done();
        });
    });
});

describe('Rankings', function() {
    it('should populate rankings for the current week and year', function(done) {
        app.rankings.getRankings({}, function(data) {
            data.should.exist;
            data.should.be.json;
            done();
        });
    });

    it('should populate rankings for the given week and year', function(done) {
        app.rankings.getRankings({
            year: 2015,
            week: 5
        }, function(data) {
            data.should.exist;
            data.should.be.json;
            done();
        });
    });
});

describe('Scoreboard', function() {
    it('should populate scoreboard data for the current week and year', function(done) {
        app.scoreboard.getScoreboard({}, function(data) {
            data.should.exist;
            data.should.be.json;
            done();
        });
    });

    it('should populate scoreboard data for the given week and year', function(done) {
        app.scoreboard.getScoreboard({
            year: 2015,
            week: 5
        }, function(data) {
            data.should.exist;
            data.should.be.json;
            done();
        });
    });
});

describe('Standings', function() {
    it('should populate standings for the given year', function(done) {
        app.standings.getStandings({
            year: 2015
        }, function(data) {
            data.should.exist;
            data.should.be.json;
            done();
        });
    });
});