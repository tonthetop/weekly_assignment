function hello(people, callBack) {
    console.log("hello ");
    callBack(people)
}

function helloPeople(people) {
    console.log("chào lần 2 : " + people);
}
setTimeout(hello, 5000, "Tuấn đẹp trai", helloPeople);;