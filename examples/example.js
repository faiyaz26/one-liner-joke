var oneLinerJoke = require('../index.js'); // in your code it should be "require('one-liner-joke');" without quote


/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke();


/*
The variable getRandomJoke will contain a random joke with a tag and with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/

var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');

