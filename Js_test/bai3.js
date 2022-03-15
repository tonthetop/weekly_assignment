function doA(miliSeconds) {
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds) {}
    console.log("Done: A");

};

function doB(miliSeconds) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("Done: B");
        })
    }, miliSeconds)
}
const controller = async(req, res, next) => {
    doA(3000);
    console.log(await doB(1000));
};
controller()