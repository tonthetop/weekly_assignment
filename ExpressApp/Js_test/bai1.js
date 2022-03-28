 function sleep(miliSeconds) {
     setTimeout(function() {
         console.log('Hello world')
     }, miliSeconds);
 };
 //sleep(3000)
 // function sleep(miliSeconds) {
 //     return new Promise(function(resolve, reject) {
 //         setTimeout(function() {
 //             resolve();
 //             console.log("HelloWord");
 //         }, miliSeconds);
 //     })
 // }

 //  (async function() {
 //      console.log("Print A")
 //      sleep(5000);
 //      console.log("Print B")
 //  })()

 setTimeout(function() {
     console.log('Hello world')
 }, 3000);