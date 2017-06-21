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


// get detailed play-by-play data for a game
var gameId = 400763535;

cfb.games.getPlayByPlay(gameId).then((data) => {
    // log to the console, write to a file or database, or do whatever you will
    console.log(data);
});


// get scoreboard data
var inputs = {
    year: 2015,
    week: 5
};

cfb.scoreboard.getScoreboard(inputs).then((data) => {
    console.log(data);
});


// get rankings
var inputs = {
    year: 2015,
    week: 10
};

cfb.rankings.getRankings(inputs).then((data) => {
    console.log(data);
});


// get standings
var inputs = {
    year: 2015
};

cfb.standings.getStandings(inputs).then((data) => {
    console.log(data);
});

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