const controller = () => {
    const array = Array.from(Array(1000000).keys())
    const promiseJobs = array.map(job => new Promise((resolve, reject) => {
        resolve(job)
            // console.log(job)
    }))
    Promise.all(promiseJobs)
        .then((value) => {
            console.log(value)
        })
}
controller()
controller()
controller()