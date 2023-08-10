function cubeNumber(number) {
    if (typeof number !== 'number') {
        return'Please Write a Number';    
    } else{
        var cubeCalculation = Math.pow(number, 3);
        return cubeCalculation;
    }    
}


function matchFinder(string1, string2) {

    const inputMatchTest = string1.includes(string2);

    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please provide "string"'        
    }
    if (inputMatchTest == true) {        
        return true;
    } else{
        return false;
    }
}


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

function findAddress(obj){
    if(typeof obj !== 'object'){
        return 'please input an object correctly';
    } else{
        var street = obj.street || '__';
        var house = obj.house || '__';
        var society = obj.society || '__';

        return street + ',' + house + ',' + society;

    }

}


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