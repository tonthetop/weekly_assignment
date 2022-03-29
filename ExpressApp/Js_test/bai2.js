 function randomJob(job) {
     return new Promise(function(resolve, reject) {
         setTimeout(() => {
             resolve(job);
             console.log("did job: " + job)
         }, Math.round(Math.random() * 10000))
     })

 };

 (async() => {

     const unsovledJobs = Array.from(Array(20).keys()).map(randomJob)
     for (let i = 0; i < 20; i++) {
         await unsovledJobs
     }

 })()