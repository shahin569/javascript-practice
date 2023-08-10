// lets say you go to shop to buy some fruits. Now create a function name canPay() that takes two input, array and number.

// 1. in array each element means retails money like 1 taka, 2 taka, 5 taka
// 2. second input means the price of fruits. 10 taka

// Task:
// 1. if retail money sum is greater then fruits price, return boolean true
// 2. if retail money sum is less then fruits price, return boolean false
// 3 Bonus: check if first array is empty. if array is empty, give a meaningfull message.


function canPay(changeArray, totalDue){

    let sum = 0;

    for (let index = 0; index < changeArray.length; index++) {
        const element = changeArray[index];
        sum += element;  
    }
    if (changeArray.length === 0) {
        return 'Bring your money';            
    }else{
        if (sum >= totalDue) {
            return true;            
        } else{
            return false;
        }
    }    
}

var cash = [1, 2, 5];
var chipsPrice = 10;

console.log(canPay(cash, chipsPrice));