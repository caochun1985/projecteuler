var fs = require('fs');
var point = {x: 0, y: 0};
var results = [];

fs.readFile('resources/problem_18.txt', function (err, data) {

    var lines = data.toString().split('\n');

    var matrix = [];

    lines.forEach(function (line) {
        var lineArray = line.split(' ');
        matrix.push(lineArray);
    });

    search(matrix, point, 0);

    var max = 0;

    for (var i = 0; i < results.length; i++) {
        if (results[i] > max) {
            max = results[i];
        }
    }

    console.log(max);

});

var search = function (matrix, point, result) {
    if (point.x < 15 && point.y < matrix[point.x].length) {
        var current = matrix[point.x][point.y];
        result = result + parseInt(current);
        search(matrix, {x: point.x + 1, y: point.y}, result);
        search(matrix, {x: point.x + 1, y: point.y + 1}, result);
    } else {
        results.push(result);
    }
}
