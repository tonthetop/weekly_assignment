/* khac nhau giua For vs Foreach*/
const funct1 = function() {
    // For: phải biết trước số vòng lặp
    const arr = [1, 2, 3, 4, 5];
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    //Foreach: Không cần giới hạn số vòng lặp
    arr.forEach(element => {
        sum += element
    });
    console.log(sum);
}

const funct2 = function() {
    // For: break được vòng lặp, giá trị sau khi break có thể sử dụng lại
    const arr = [1, 2, 3, 4, 5];
    var i = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 4) break
    }
    console.log(arr[i]);
    //Foreach: Không break ngang khi đang thực thi
    // arr.forEach(element => {
    //     if (element == 4) break
    // });
}
const funct3 = async function() {
    //FOreach: work with async function
    const fruitBasket = {
        apple: 27,
        grape: 0,
        pear: 14
    }
    const getNumFruit = fruit => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fruitBasket[fruit])
        }, 1000)
    })
    for (var fruit in fruitBasket) {
        const get = await getNumFruit(fruit)
        console.log(get)
    }

    //foreach: not working with async function
    // Object.keys(fruitBasket).forEach(function(key) {
    //     await getNumFruit(fruitBasket[key]);

    // });
}