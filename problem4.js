//Problem - 4
// ত োমাকে একটা function দে ওয়া হবে called “findAddress()” যা ইনপুট হি সে বে একটা object নি বে । Object এর
// তি নটি property থাকবে ।
// Task:
// 1. ত োমাকে ১ম sample output এর format এ output return করতে হবে ।
// 2. Bonus: যদি object এর ক োন ো property missing থাকে সে ক্ষে ত্রে সে ই অংশটুকু double underscore
// দি য়ে replace হবে । (২য় output এর format এ )


function findAddress(input){
    if(typeof obj !== 'object'){
        return 'please input an object correctly';
    } else{
        var street = input.street || '__';
        var house = input.house || '__';
        var society = input.society || '__';

        return street + ',' + house + ',' + society;

    }

}


var obj = {
    street:10,
    house:'15A',
    society:'Earth Perfect',
}

console.log(findAddress(obj));
// findAddress(obj)
