/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arrOfNum){
  if (arrOfNum.length === 0) return undefined;
  let largestNum = arrOfNum[0]
    for (let i = 1; i<arrOfNum.length; i++) {
        if(arrOfNum[i] > largestNum) {
          largestNum = arrOfNum[i]
        }
    }
    return largestNum; 
}
module.exports = findLargestElement;

console.log(findLargestElement([1,2,3,4,5,6,7,9,7,8]))
console.log(findLargestElement([]))

