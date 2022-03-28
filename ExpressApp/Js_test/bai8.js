const a = function() {
    console.log('nextick')
}

const b = function() {
    console.log('Immediate')
};
setImmediate(b);
setTimeout(() => console.log('timeout'))
process.nextTick(a)
console.log('intial');
//nexttick: -thuc thi ngay lan lap even loop tiep theo.. nghia la sau khi call stack rong~ lan tiep theo
//setImmediate: - thuc thi o cuoi callback LOOP, nghia la callback of setTimeout xog -->callback of setImmediate