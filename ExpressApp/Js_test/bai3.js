function doA(miliSeconds) {
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds) {}
    console.log("Done: A");
};

function doB(miliSeconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("OK")
            console.log("Done B");
        }, miliSeconds);
    })
}

const controller = async(req, res, next) => {
    doA(10000);
    await doB(1000);
    res.sendStatus(200).end;
};

module.exports = controller;