/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let productArray = [];
  if(!transactions.length){
    return []
  }

  const output = []; // final list to be returned
  output.push({
    category: transactions[0]["category"], 
    totalSpent: transactions[0]["price"]
  })
  console.log(output)
  productArray.push(transactions[0]["category"])

  for (let i = 1; i < transactions.length; i++){

    let productCategory = transactions[i]["category"]
    console.log("Product category ->", productCategory)
    // let outputCategory = output[j]["category"]

    for (let j = 0; j <= output.length; j++){



      if (j == output.length){
        console.log("1st if executed")
        output.push({
          category: transactions[i]["category"], 
          totalSpent: transactions[i]["price"]
        })
        break;
      }


      if (productCategory != output[j]["category"]){
        console.log("2nd if executeed")
        // output.push({
        //   category: transactions[i]["category"],
        //   totalSpent: transactions[i]["price"]
        // })
        continue;
      }

      else{
        console.log("3rd if executed")
        output[j]["totalSpent"] += transactions[i]["price"];
        break;
      }

  

    }

  }
    return output;
  }
module.exports = calculateTotalSpentByCategory;
