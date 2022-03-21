 function randomJob(job) {
     setTimeout(() => {
         console.log("did job: " + job)
     }, Math.round(Math.random() * 10000))

 };

 function do5Job() {
     for (let i = 1; i <= 5; i++) {
         randomJob(i)
     }
 };
 const unsovledJobs = Array.from(Array(4).keys()).map((i) => do5Job());
 Promise.all(unsovledJobs)
     .then(function() {})