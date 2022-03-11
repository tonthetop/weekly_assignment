function functA() {
    var start = new Date().getTime();
    for (i = 0; i < 5000000; ++i) {}

    var end = new Date().getTime();
    var time = end - start;
    console.log('Execution time: ' + time);
}
const functB = new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
        setTimeout(() => {
            resolve("Success")
        }, 1000)
    } else reject("Failure")
})
const controller = async(req, res, next) => {
    // setTimeout(() => {
    //     console.log("A done")
    // }, 10000)
    await functB
        .then(data => { console.log(data) })
        .catch(err => { console.log(err) });


}
controller()