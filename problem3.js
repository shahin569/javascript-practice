// problem - 3


// function sortMaker(input){

//     if (!Array.isArray(input) == true) {
//         console.log('write an array please');
//     } else{
//         for (let index = 0; index < input.length; index++) {
//             const arrayNumbersInputed = input[index];
//             console.log(arrayNumbersInputed.sort());                   
//         }
//     }
// }



// let numb = [11, 22];
// sortMaker(numb);


function sortMaker(input) {
    if (!Array.isArray(input) || input.length !== 2) {
        return "invalid Input";
    } else {
        if (input[0] < 0 || input[1] < 0) {
            return "invalid Input";
        } else if (input[0] === input[1]) {
            return "equal";
        } else {
            return input.sort((a, b) => b - a);
        }
    }
}

let numb = 55
console.log(sortMaker(numb));
