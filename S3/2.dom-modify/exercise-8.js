
let p$$ = document.createElement('p');

p$$.textContent = "Voy en medio!";

let div$$ = document.querySelectorAll('div');

document.body.insertBefore(p$$,div$$[1]);  