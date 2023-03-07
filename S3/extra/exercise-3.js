
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let ul$$ = document.createElement('ul');
let div$$ = document.querySelector('[data-function="printHere"]');


for(let i = 0; i < cars.length; i++){

    let li$$ = document.createElement('li');
    li$$.textContent = cars[i];

    ul$$.appendChild(li$$);
}

div$$.appendChild(ul$$);