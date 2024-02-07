// const firstName = "Vansh";
// const lastName = "Dhar";

// console.log("Hi" + firstName + lastName);

// for (let i = 0; i <100; i++){

//     console.log(i);
// }

// // Objects in Javascript

// const allProducts = [{
//     name: "Book", 
//     price: 1000
// }, 
// {   name: "cycle",
//     price: 2930293

// }, 
// {
//     name:"macbook", 
//     price: 32923
// }]

// const productLength = allProducts.length; //length function

// for (let i = 0; i < productLength; i++){
//     console.log("Name->", allProducts[i]["name"], "price->", allProducts[i]["price"]);
// }

// // We can have arrays, array of objects and object of arrays

// const objectArray = {
//     array1: [1, 2, 3, 4],
//     array2: [5, 6, 7, 8], 
//     array3: [9, 10]
// }

// const objectLength = objectArray.length;

// console.log(objectArray["array1"]);

// // functions in javascript

// function sum(num1, num2){
//     console.log(num2+num1);
// }
// sum(1, 3);

// // let sum = 0;
// // for (let i = 0; i < 1000000000000; i++){
// //     sum += i;
// // }
// // console.log(sum);

// //function callbacks concept

// // function sum(num1, num2, fntocall){
// //     const ans = num1 + num2;
// //     fntocall(ans);
// // }
// function displayresult(data){
//     console.log("Sum is:", + data);

// }
// const val = sum(1, 2, displayresult)

// // function callback example

// function product(num1, num2, funToCall){
//     const ans = num1*num2;
//     funToCall(ans);
// }

// function isTheNumberOddorEven(num){

//     if (num % 2 == 0){
//         console.log("Product is even !")

//     }
//     else{
//         console.log("Product is odd !")
//     }
// }

// product(2, 3, isTheNumberOddorEven);

function output(){
    num -= 1;
   if (num > 0){
    console.log(num)
   }
}
let num = 31;
setInterval(output, 1*1000);