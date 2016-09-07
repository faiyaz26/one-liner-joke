# one-liner-joke
[![Build Status](https://api.travis-ci.org/faiyaz26/one-liner-joke.svg?branch=master)](https://travis-ci.org/faiyaz26/one-liner-joke)


A simple Node Module which can provide one line joke randomly or from specific tag



### Installation
```
npm install one-liner-joke --save
```


### Usage

```
var oneLinerJoke = require('one-liner-joke');


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

```

## Tests
```
npm test
```