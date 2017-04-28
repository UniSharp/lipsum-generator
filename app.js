var fs = require('fs');

var Markov = require('markov-respond');
var m = new Markov();

var s = fs.readFileSync(__dirname + '/input.txt');
m.train(s);
console.log(m.respond('', 50));
