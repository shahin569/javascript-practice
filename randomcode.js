function test(a, b, c = 2, d = 3){
    const newSUm = a+b+c+d;
    return newSUm;
}

const testInput = test(2, 3);
// console.log(testInput);

// const student = {
//     total: 20,
//     male: 12,
//     female: 8,
// }
// console.log(student.total, student.male, student.school);
// const student = {
//     total: 20,
//     male: 12,
//     female: 8,
// };

// if (student.hasOwnProperty("school")) {
//     console.log(student.school);
// } else {
//     console.log("There is no property with that name");
// }

// const x = true;
// if(x){
//     console.log('value it first')
// }else{
//     console.log('value if second')
// }


// function numberCount(index){
//       if (index < 10) {
//         console.log('number is less then 10')
        
//     }else{
//         console.log('please input in between 0 - 10')
//     }

// }
// numberCount(2);
function gretting() {
    return 'good morning';
}

function grettingsControl(gretting) {
    console.log(gretting);
}




// gretting();
// grettingsControl(gretting());

let a = {name: 'mofiz', age:48,};
let b = a;
b.name = 'shofiz';
// console.log(b, a);

let c = 3;
let d = c;
d = 4;
// console.log(c, d);