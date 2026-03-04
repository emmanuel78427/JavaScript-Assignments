// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function showTime() {
  const now = new Date();

  // 24-hour format
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  const time24 = `${hours}:${minutes}:${seconds}`;

  // 12-hour format with AM/PM
  let hours12 = now.getHours();
  const ampm = hours12 >= 12 ? "PM" : "AM";

  hours12 = hours12 % 12 || 12; // convert 0 → 12
  hours12 = String(hours12).padStart(2, "0");

  const time12 = `${hours12}:${minutes}:${seconds} ${ampm}`;

  console.log("24-hour:", time24);
  console.log("12-hour:", time12);
  console.log("-------------------");
 
   
}

// run every second
setInterval(showTime, 1000);