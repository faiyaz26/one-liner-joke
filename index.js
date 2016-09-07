var jokes = require('./jokes.json');

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomJoke(){
    const min = 0;
    const max = jokes.length - 1;
    const idx = getRandomInt(min, max);

    return jokes[idx];
}

function getAllJokesWithTag(tag){
    var jokesWithTag = [];
    jokes.forEach(function(joke) {
        if(joke.tags.indexOf(tag) != -1){
            jokesWithTag.push(joke);
        }
    });
    
    return jokesWithTag;
}

function getRandomJokeWithTag(tag){
    var jokesWithTag = getAllJokesWithTag(tag);

    if(jokesWithTag.length == 0){
        return {'body' : '', 'tags' : []};
    }

    const min = 0;
    const max = jokesWithTag.length - 1;
    const idx = getRandomInt(min, max);

    return jokesWithTag[idx];
}

module.exports = {
    getRandomJoke : getRandomJoke,
    getAllJokesWithTag: getAllJokesWithTag, 
    getRandomJokeWithTag: getRandomJokeWithTag
};