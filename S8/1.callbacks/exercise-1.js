
const numbersList = [];

function sum(a, b){

    let suma = a + b;
    return suma;

}

function substract(a, b){

    let resta = a - b;
    return resta;

}

function father(a, b, callback){

    return callback(a, b);

}

let result = father(2, 5, sum);

numbersList.push(result);

console.log(numbersList);