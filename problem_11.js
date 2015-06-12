var fs = require('fs');

var max = 0;
var matrix = new Array();

fs.readFile('resources/problem_11.txt', function (err, data) {
    var lines = data.toString().split('\n');

    lines.forEach(function (line) {
        var lineArray = line.split(' ');
        matrix.push(lineArray);
    });

    for (var i = 0; i < matrix.length; i++) {
        var rows = matrix[i];
        for (var j = 0; j < rows.length; j++) {
            var product = Math.max(getRightProduct(i, j), getDownProduct(i, j), getRightDiagonallyProduct(i, j), getLeftDiagonallyProduct(i, j));
            if (product > max) {
                max = product;
            }
        }
    }

    console.log(max);
});

var getRightProduct = function (i, j) {
    if (j > 16) {
        return 0;
    }
    return parseInt(matrix[i][j]) * parseInt(matrix[i][j + 1]) * parseInt(matrix[i][j + 2]) * parseInt(matrix[i][j + 3]);
}

var getDownProduct = function (i, j) {
    if (i > 16) {
        return 0;
    }
    return parseInt(matrix[i][j]) * parseInt(matrix[i + 1][j]) * parseInt(matrix[i + 2][j]) * parseInt(matrix[i + 3][j]);
}

var getRightDiagonallyProduct = function (i, j) {
    if (i > 16 || j > 16) {
        return 0;
    }
    return parseInt(matrix[i][j]) * parseInt(matrix[i + 1][j + 1]) * parseInt(matrix[i + 2][j + 2]) * parseInt(matrix[i + 3][j + 3]);
}

var getLeftDiagonallyProduct = function (i, j) {
    if (i < 3 || j > 16) {
        return 0;
    }
    return parseInt(matrix[i][j]) * parseInt(matrix[i - 1][j + 1]) * parseInt(matrix[i - 2][j + 2]) * parseInt(matrix[i - 3][j + 3]);
}
