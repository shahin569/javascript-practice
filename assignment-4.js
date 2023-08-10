// problem 1 solving

function cubeNumber(input) {
    if (typeof input !== 'number') {
        return'Please Write a Number';    
    } else{
        var cubeCalculation = input * input * input;
        return cubeCalculation;
    }
    
}
const inputVariable = 0;
const functionsInput = cubeNumber(inputVariable);
console.log(functionsInput);