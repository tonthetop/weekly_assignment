async function randomJob(job) {
    setTimeout(async() => {
        console.log("did job: " + job)
    }, Math.round(Math.random() * 10000))

};



function doJob() {
    return new Promise(function(resolve, reject) {
        resolve(() => {
            for (let i = 1; i <= 5; i++) {
                randomJob(i)
            }
        })
    })
};
doJob()