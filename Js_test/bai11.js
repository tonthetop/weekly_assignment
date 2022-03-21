var person = { firstName: 'Khoa', lastName: 'Nguyễn' };
var type = ['Hello', 'Good morning']

function say(greeting0, greeting1) {
    console.log(greeting0 + ',' + greeting1 + ' ' + this.firstName + ' ' + this.lastName);
}


say.apply(person, type); // goi ham truc tiep
say.bind(person, ...type)(); // tao thanh 1 ham moi, syntax giong call
say.call(person, ...type); // goi ham truc tiep

/*giong nhau:
- Deu dung de xac dinh con tro va tham so cho Ham`
*/

/*khac nhau: 
- bind va call: para gom: this va destructuring cua Array || apply: para gom: this va Array
- call va say: goi truc tiep || bind: tao thanh ham moi
*/