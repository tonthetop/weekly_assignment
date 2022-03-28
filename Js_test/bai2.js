 function randomJob(job) {
     return new Promise(function(resolve, reject) {
         setTimeout(() => {
             resolve(job);
             console.log("did job: " + job)
         }, Math.round(Math.random() * 10000))
     })

 };

 function do5Job() {
     const p = Array.from(Array(5).keys()).map((i) => randomJob(i))
     return p
 };




 const unsovledJobs = Array.from(Array(4).keys()).map((i) => do5Job());

 Promise.all(unsovledJobs)
     .then(function() {})