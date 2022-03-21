const waitBlocking = (miliSeconds) => {
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds) {}

}
const waitNonBlocking = (miliSeconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), miliSeconds)
    })
}
const controller1 = async function() {
    const startTime = new Date().getTime();
    await waitNonBlocking(1000);
    console.log("Con1: " + (new Date().getTime() - startTime).toString());

};
const controller2 = function() {
    const startTime = new Date().getTime();
    waitBlocking(1000)
    console.log("Con2: " + (new Date().getTime() - startTime).toString());
}

const controller = async function() {
    const startTime = new Date().getTime();
    //controller2(1000)
    await controller1(1000)
    controller2(1000)
    console.log(+(new Date().getTime() - startTime).toString());
};

// controller();
// controller();
// controller();
(async() => {
    await controller();
    await controller();
    await controller();

})()