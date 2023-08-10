// write a function with the name sortMaker() 
// function parameter will be an array and array will pass only two element everytime.
// Task: 
// 1. if array element are positive then sort the array largets to smallest 
// 2. if both elments are same of the array, then return "equal"
// 3. if any element are negetive of the array, then return "invalid Input"



function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return "invalid Input";
    } else {
        if (arr[0] < 0 || arr[1] < 0) {
            return "invalid Input";
        } else if (arr[0] === arr[1]) {
            return "equal";
        } else {
            return arr.sort((a, b) => b - a);
        }
    }
}

let numb = [65, 10];
console.log(sortMaker(numb));


