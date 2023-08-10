// problem -2



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

// console.log(matchFinder('hello', 'Llo'));