// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("example.txt", "Hello World", function(err) {
    if(err) {
        return console.log("Write failed",err);
    }
     console.log("Write done")
})

for(let i = 0; i<= 10; i++) {
    console.log("loop finished")
}