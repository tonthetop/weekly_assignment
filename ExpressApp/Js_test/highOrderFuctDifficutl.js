function unless(test, then) {
    if (!test) return then();
    return "even"
}

function dojob(n) {
    console.log(n)
    unless(n % 2 == 1, () => "odd");
}


const a = dojob(1010);
console.log(a)