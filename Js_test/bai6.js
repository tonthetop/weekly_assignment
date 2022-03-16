const student = {
    date: new Date(),
    name: "tuandeptrai",
    age: 18,
    marks: {
        math: 8,
        physics: 9
    }
};
//Shadow clone
// Assign with operator =
const cloneStudent = student;
//Spread
const cloneStudent2 = {...student };
// Object.assign
const cloneStudent3 = Object.assign({ class: "8A4" }, student);

//Deep Clone
//JSON
const cloneStudent4 = JSON.parse(JSON.stringify(student));
var cloneStudent5 = jQuery.extend(true, {}, student)
shadowClone.marks.math = 100;
console.log(student)

// //Deep clone vs Shadow Clone
// const shadowClone = {...student };
// const deepClone = JSON.parse(JSON.stringify(student));
// console.log(typeof cloneStudent2.date)
//     //Shadow clone se chi copy duoc lop ngoai`, cac lop sau ben trong se hieu la con tro
// shadowClone.marks.math = 100;
// //
// console.log(student);
// console.log(deepClone);