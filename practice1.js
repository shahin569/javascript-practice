function variableTypeCheck(input){
    var checkInput = typeof input;
    // console.log(checkInput);
    if (typeof input !== "number") {
        return "Please write a number" 
    } 
    if (checkInput % 1 == 0) {
        return true;    
    }else {
        return 'Please write a complete number,  not a Decimal number';
    }


}
var userInput = 2.2;
var functionsNameIput = variableTypeCheck(userInput);
// console.log(functionsNameIput);


// console.log(553%1);


/*
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
Input : 6
Output: -1
Input: -15
Output: -22
Input: 15
Output: 30

*/

function isLGSeven(input) {
    if (typeof input !== "number") {
        return "please input a number";        
    }
    if (input < 7) { // i will work on this function later - shahin
        var result = input - 7;
        return result;        
    } else{
        var result = input * 2;
        return result;
    }    
}

// console.log(isLGSeven(8));

// function findingBadData(arr){
//     if(!Array.isArray(arr))[
//         return 'please input an array';
//     ]

// }

const nagtiveValitatorInput = [9, 1, -3, -2, 5, -4, 7];
const nagtiveValitator = findingBadData(nagtiveValitatorInput);
console.log(nagtiveValitator);
