// lets say you go to shop to buy some fruits. Now create a function name canPay() that takes two input, array and number.

// 1. in array each element means retails money like 1 taka, 2 taka, 5 taka
// 2. second input means the price of fruits. 10 taka

// Task:
// 1. if retail money sum is greater then fruits price, return boolean
// 2. if retail money sum is less then fruits price, return false boolean
// 3 Bonus: check if first array is empty. if array is empty, give a meaningfull message.


function canPay(arr, numb){
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(element);
        
    }
    
}

var arrVr = [1, 2, 5];
var numbVr = 10;

console.log(canPay(arrVr, numbVr));