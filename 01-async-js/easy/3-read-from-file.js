// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs");

fs.readFile("example.txt", "utf-8", function(err,data) {
  
   
    console.log("File content:", data)
});

 for(let i = 0; i<10900; i++) {
    console.log("hi")
 }
 console.log("loop going to finish")
 console.log("loop finished")
 console.log("now we are going to see callbacks")
 
