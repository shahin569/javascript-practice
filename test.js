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

console.log(canPay(arrVr, numbVr)); // This will output 'true'