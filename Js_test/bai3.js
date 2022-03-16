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

const controller = async() => {
    const startTime = new Date().getTime();
    doA(5000);
    await doB(1000);
    console.log(new Date().getTime() - startTime)
};
controller()
controller()
controller()
    // (async() => {
    //     {
    //         await controller();
    //         await controller();
    //         await controller();
    //     }
    // })()