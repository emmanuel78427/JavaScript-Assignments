/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t*1000)
    })
}
function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t*1000)
    })
}
function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t*1000)
    })
}
function calculateTime(t1,t2,t3) {
    const start = Date.now();
    return wait1(t1).then(function() {
        return wait2(t2)
    })
    .then(function() {
        return wait3(t3)
    })
    .then(function() {
         console.log("rn completed all 2")
        return Date.now() - start
    })
    .then(function(time) {
        console.log("completed all 3")
        return time;
    })
}


calculateTime(1,2,3).then(function(result) {
    console.log(result);
})

/* async function run() {
    let time = await calculateTime(1,2,3)
    console.log(time)
}
run() */

