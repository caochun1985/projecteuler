var n = 1;
var total = 0;

while (true) {
    total = total + n;
    n++;

    var array = [];

    for (var i = parseInt(Math.sqrt(total)); i > 0; i--) {
        if (total % i == 0) {
            array.push(i);
            if (i != total / i) {
                array.push(total / i);
            }
        }
    }

    if (array.length >= 500) {
        console.log(total);
        break;
    }

}