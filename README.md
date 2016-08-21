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

cfb.games.getPlayByPlay(gameId, function(data) {
    // log to the console, write to a file or database, or do whatever you will
    console.log(data);
});


// get scoreboard data
var inputs = {
    year: 2015,
    week: 5
};

cfb.scoreboard.getScoreboard(inputs, function(data) {
    console.log(data);
});


// get rankings
var inputs = {
    year: 2015,
    week: 10
};

cfb.rankings.getRankings(inputs, function(data) {
    console.log(data);
});


// get standings
var inputs = {
    year: 2015
};

cfb.standings.getStandings(inputs, function(data) {
    console.log(data);
});
```

# license
MIT

# author
Bill Radjewski | [@billradjewski](https://twitter.com/billradjewski)