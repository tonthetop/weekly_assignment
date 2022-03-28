const student = {
    date: new Date(),
    name: "tuandeptrai",
    age: 18,
    marks: {
        math: 8,
        physics: 9
    },
    showName() {
        console.log(this.name)
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
console.log(cloneStudent4) /* Luu Y: Json parse se chi clone nhung property la object hay value, function thi khong */

//Deep clone vs Shadow Clone
const shadowClone = {...student };
const deepClone = JSON.parse(JSON.stringify(student));
//Shadow clone se chi copy duoc lop ngoai`, cac lop sau ben trong se hieu la con tro
shadowClone.marks.math = 100;
//
console.log(shadowClone);
console.log(deepClone);