var getSequenceCount = function (n) {
    var count = 0;

    while (n != 1) {
        count++;
        if (n % 2 == 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
    }

    count++;

    return count;
}

var max = 0;
var n = 0;

for (var i = 1; i <= 1000000; i++) {
    var count = getSequenceCount(i);
    if (count > max) {
        max = count;
        n = i;
    }
}

console.log(n);