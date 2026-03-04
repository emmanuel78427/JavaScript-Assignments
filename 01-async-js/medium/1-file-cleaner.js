// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require("fs");

fs.readFile("example.txt", "utf-8", function(err, data) {
    if(err) {
        console.log("Error reading the file", err)
        return;
    }
    console.log("reading completed", data)
    const cleaned = data.replace(/\s+/g, " ").trim();

    fs.writeFile("example.txt",cleaned, function(err){
    if(err) {
        console.log("Error writing the file", err);
        return;
    }
    console.log("File cleaned successfully", cleaned)

    })
})