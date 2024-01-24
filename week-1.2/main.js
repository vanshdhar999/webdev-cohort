const firstName = "Vansh";
const lastName = "Dhar";

console.log("Hi" + firstName + lastName);

for (let i = 0; i <100; i++){

    console.log(i);
}

// Objects in Javascript

const allProducts = [{
    name: "Book", 
    price: 1000
}, 
{   name: "cycle",
    price: 2930293

}, 
{
    name:"macbook", 
    price: 32923
}]

const productLength = allProducts.length;

for (let i = 0; i < productLength; i++){
    console.log("Name->", allProducts[i]["name"], "price->", allProducts[i]["price"]);
}

// We can have arrays, array of objects and object of arrays

const objectArray = {
    array1: [1, 2, 3, 4],
    array2: [5, 6, 7, 8], 
    array3: [9, 10]
}

const objectLenght = objectArray.length;

console.log(objectArray["array1"]);