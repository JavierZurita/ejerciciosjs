/*
let arrTestMe = [];
let items$$ = document.querySelectorAll('*');

for(let i = 0; i < items$$.length; i++){

    if(items$$[i].getAttribute("data-function") === "testMe"){
        arrTestMe.push(items$$[i]);
    }
}

for(let i = 0; i < arrTestMe.length; i++){
    console.log(arrTestMe[i]);
}
*/
// OTRO METODO

let item$$ = document.querySelectorAll('[data-function="testMe"]');

for(let i = 0; i < item$$.length; i++){
    console.log(item$$[i]);
}
//console.log(item$$);