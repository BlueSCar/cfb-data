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

# contents
1. [install](#install)
2. [use](#use)

    a. [games](#games)

    b. [scores](#scores)

    c. [schedules](#schedules)

    d. [conferences](#conferences)

    e. [teams](#teams)

    f. [rankings](#rankings)

    g. [standings](#standings)

    h. [recruiting](#recruiting)

3. [license](#license)

# install
```shell
npm install cfb-data
```

# use
```javascript
const cfb = require('cfb-data');
```

## games
```javascript
const gameId = 400763535;

// get detailed play-by-play data for a game
const result = await cfb.games.getPlayByPlay(gameId);

// get box score
const result = await cfb.games.getBoxScore(id);

// get game all game data
const summary = await cfb.games.getSummary(gameId);
```

## scores
```javascript
// get scoreboard data
const inputs = {
    year: 2015,
    week: 5
};

const result = await cfb.scoreboard.getScoreboard(inputs);
```

## schedules
```javascript
const inputs = {
    groups: 80, // all FBS games
    year: 2017,
    week: 8
};

const result = await cfb.schedule.getSchedule(inputs);
```

## conferences
```javascript
const results = await cfb.scoreboard.getConferences();
```

## teams
```javascript
// get list of teams
const result = await cfb.teams.getTeamList();

// get individual team data
const teamId = 130;
const result = await cfb.teams.getTeamInfo(teamId);

// get team roster data
const result = await cfb.teams.getTeamPlayers(teamId);
```

## rankings
```javascript
// get rankings
const inputs = {
    year: 2015,
    week: 10
};

const result = await cfb.rankings.getRankings(inputs);
```

## standings
```javascript
// get standings
const inputs = {
    year: 2015
};

const result = await cfb.standings.getStandings(inputs);
```

## recruiting
```javascript
// get recruiting data from 247Composite
// get player rankings
const result = await cfb.recruiting.getPlayerRankings({
                    year: 2016
                });

const result = await cfb.recruiting.getPlayerRankings({
                    year: 2016,
                    position: "DT"
                });

const result = await cfb.recruiting.getPlayerRankings({
                    year: 2016,
                    group: "JuniorCollege"
                });

// get school rankings
const result = await cfb.recruiting.getSchoolRankings(2016);

// get a school's commit list
const result = await cfb.recruiting.getSchoolCommits('michigan', 2016);
```

# license
MIT