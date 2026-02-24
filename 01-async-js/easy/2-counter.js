// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)


let count = 0; ;

function TO() {
    count++
    console.log(count)
    setTimeout(TO,1000)
}
 
TO()

 
