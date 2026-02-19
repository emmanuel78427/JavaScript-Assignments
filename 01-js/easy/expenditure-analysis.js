/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


function calculateTotalSpentByCategory(transcations) {
  let totals = {}
  for(let i = 0; i<transcations.length; i++) {
      let category = transcations[i].category;
      let pricing = transcations[i].price
      if(totals[category] === undefined){
        totals[category] = 0;
      }
      totals[category] += pricing
  }
  let result = [];
  for(let category in totals){
    result.push({
    category : category ,
    totalSpent : totals[category]
  })
  }
    
  return result;
}

module.exports = calculateTotalSpentByCategory;

console.log(calculateTotalSpentByCategory([
  {itemname: "burger", category: "food", price: 300, timestamp: 123},
  {itemname: "Tshirt", category: "clothing", price: 200, timestamp: 456},
  {itemname: "pizza", category: "food", price: 300, timestamp: 789},
  {itemname: "Tshirt", category: "clothing", price: 200, timestamp: 135}
]))
