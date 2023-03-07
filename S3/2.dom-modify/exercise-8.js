
let p$$ = document.createElement('p');

p$$.textContent = "Voy en medio!";

let div$$ = document.querySelectorAll('div');

div$$[1].parentNode.insertBefore(p$$,div$$[1]);  