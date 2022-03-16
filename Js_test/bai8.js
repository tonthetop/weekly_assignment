const a = function() {
    console.log('nextick')
}

const b = function() {
    console.log('imme')
};
setImmediate(b);
setTimeout(() => console.log('timeout'))
process.nextTick(a)
console.log('c');
//nexttick: -thuc thi ngay lan lap even loop tiep theo.. nghia la sau khi di vao call stacl