
const baseUrl = 'https://api.nationalize.io?name=';


let input$$ = document.querySelector('input');
let button$$ = document.querySelector("button");


  const search = async (persona) => {
    const response = await fetch(`https://api.nationalize.io?name=${input$$.value}`);
    const responseJson = await response.json();
    console.log(responseJson);

    createNation(responseJson);
  }

  const createNation = (persona) => {
    let p$$ = document.createElement('p');
    let text = `El nombre ${persona.name} tiene`;

    /*for (let i = 0; i < persona.country.length; i++) {
        console.log(i + persona.country.probability);

        const percen = Math.floor(persona.country.probability * 100);
        text += ` un ${percen} de ser de ${persona.country.country_id}`
    }*/
    for (const country of persona.country) {
        const percentage = Math.floor(country.probability * 100);
        text += ` un ${percentage} porciento de ser de ${country.country_id}`;
    }
    p$$.textContent = text;
    document.body.appendChild(p$$);
  }
  
  button$$.addEventListener("click", search);
