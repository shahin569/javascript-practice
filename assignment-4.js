// problem 1 solving

function cubeNumber(input) {
    if (typeof input !== 'number') {
        return'Please Write a Number';    
    } else{
        var cubeCalculation = input * input * input;
        return cubeCalculation;
    }
    
}
const inputVariable = 'hello';
const functionsInput = cubeNumber(inputVariable);
console.log(functionsInput);