**Update (2.0.0):** Every function now returns a promise.  Existing functionality should still be preserved, so it is safe to update from previous versions without making any changes.

# cfb-data

- currently supports retrieving the following types of data:
    - detailed play-by-play
    - scores
    - standings
    - rankings
- investigating future support for other types of data
    - team statistics
    - individual statistics

# install
```shell
npm install cfb-data
```

# use
```javascript
var cfb = require('cfb-data');
```

## games
```javascript
var gameId = 400763535;

// get detailed play-by-play data for a game
cfb.games.getPlayByPlay(gameId).then((data) => {
    // log to the console, write to a file or database, or do whatever you will
    console.log(data);
});

// get box score

cfb.games.getBoxScore(id).then((data) => {
    conosole.log(data);
});

// get game all game data
cfb.games.getSummary(gameId).then((data) => {
    console.log(data);
});
```

## scores
```javascript
// get scoreboard data
var inputs = {
    year: 2015,
    week: 5
};

cfb.scoreboard.getScoreboard(inputs).then((data) => {
    console.log(data);
});
```

## schedules
```javascript
cfb.schedule.getSchedule({
    groups: 80,
    year: 2017,
    week: 8
}).then((data) => {
    console.log(data);
});
```

## conferences
```javascript
cfb.scoreboard.getConferences().then((data) => {
    console.log(data);
});
```

## teams
```javascript
// get list of teams
cfb.teams.getTeamList().then((data) => {
    console.log(data);
});

// get individual team data
let teamId = 130;

cfb.teams.getTeamInfo(teamId).then((data) => {
    console.log(data);
});

// get team roster data
cfb.teams.getTeamPlayers(teamId).then((data) => {

});
```

## rankings
```javascript
// get rankings
var inputs = {
    year: 2015,
    week: 10
};

cfb.rankings.getRankings(inputs).then((data) => {
    console.log(data);
});
```

## standings
```javascript
// get standings
var inputs = {
    year: 2015
};

cfb.standings.getStandings(inputs).then((data) => {
    console.log(data);
});
```

## recruiting
```javascript
// get recruiting data from 247Composite
// get player rankings
cfb.recruiting.getPlayerRankings({
                year: 2016
            })
            .then((data) => {
                console.log(data);
            });

cfb.recruiting.getPlayerRankings({
                year: 2016,
                position: "DT"
            })
            .then((data) => {
                console.log(data);
            });

cfb.recruiting.getPlayerRankings({
                year: 2016,
                group: "JuniorCollege"
            })
            .then((data) => {
                console.log(data);
            });

// get school rankings
cfb.recruiting.getSchoolRankings(2016)
            .then((data) => {
                console.log(data);
            });

// get a school's commit list
cfb.recruiting.getSchoolCommits('michigan', 2016)
            .then((data) => {
                console.log(data);
            });
```

# license
MIT