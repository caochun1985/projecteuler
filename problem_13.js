var fs = require('fs');
var array = [];
var total = 0;

fs.readFile('resources/problem_13.txt', function (err, data) {
    var lines = data.toString().split('\n');

    lines.forEach(function (line) {
        array.push(parseInt(line.substring(0, 11)));
    });

    array.forEach(function (n) {
        total = total + n;
    })

    console.log(total.toString().substr(0, 10));
});