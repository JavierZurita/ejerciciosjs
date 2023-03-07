
let input$$ = document.querySelector('input');

document.body.appendChild(input$$);

input$$.addEventListener('input', function(){
    console.log(input$$.value)
    }
);