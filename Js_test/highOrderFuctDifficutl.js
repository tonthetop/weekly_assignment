function repeat(n, action) {
    for (var i = 0; i < n; i++) {
        action(i)
    }
}
repeat(3, dojob);

function unless(test, then) {
    if (!test) then();
}

function dojob(n) {
    {
        unless(n % 2 == 1, function() {
            console.log(n, "is even");
        });
    }
}