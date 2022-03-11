//    sleep(5000).then(function() { console.log('hello event loop222') }
const sleep = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello event loop1 after: ' + ms / 1000 + "s");
    }, ms)
});
sleep(5000).then(data => {
    console.log(data)
    console.log('hello event loop2')
})