
let btn$$ = document.createElement('button');

btn$$.setAttribute('id','btnToClick');
btn$$.textContent = 'Boton';

document.body.appendChild(btn$$);


btn$$.addEventListener('click', function(e){
    console.log(e);
    }
);

