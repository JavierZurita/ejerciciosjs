
const baseUrl = 'https://api.nationalize.io?name=';


let input$$ = document.querySelector('input');
let button$$ = document.querySelector("button");

  const search = async (nation) => {
    const response = await fetch(`https://api.nationalize.io?name=${input$$.value}`);
    const responseJson = await response.json();
    console.log(responseJson);

  }


  
  button$$.addEventListener("click", search);