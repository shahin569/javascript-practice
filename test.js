function canPay(arr, numb) {
    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sum += element;

        if (sum > numb) {
            return false;
        }
    }

    return true;
}

var arrVr = [1, 2, 5];
var numbVr = 3;

// console.log(canPay(arrVr, numbVr)); // This will output 'true'

function percentChecker(fInput, fPercent) {
    if (typeof fInput !== "number") {
        return 'Please input a number';
    } else {
        var firstCalculation = fInput / 100;
        var finalResult = (firstCalculation * fPercent);
        return Number(finalResult.toFixed(2));
    }
}

var amount = 36.69; // input is a number
var percent = 10; // input is a number

console.log(percentChecker(amount, percent));
