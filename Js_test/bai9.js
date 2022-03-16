const asyncFunct = condition => new Promise((resolve, reject) => {
    if (condition) {
        setTimeout(() => {
            resolve("Success")
        }, 1000)
    } else reject("Failure")
})

// const p1 = asyncFunct(true)
const p2 = 123;
// const p3 = asyncFunct(false);
Promise.all([asyncFunct().catch(err => (err)), p2, asyncFunct().catch(err => (err))])
    .then(values => {
        console.log(values)
    })