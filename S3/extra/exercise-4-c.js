
const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  

  // btn$$ = document.querySelector('button');
  const countriesList$$ = document.createElement('div'); // Creo div padre de countries
  document.body.appendChild(countriesList$$);

  //Creo los divs hijos
  for(let i = 0; i < countries.length; i++){
  
    let div$$ = document.createElement('div');
    let h4$$ = document.createElement('h4');
    let img$$ = document.createElement('img');
    let btn$$ = document.createElement('button')

    h4$$.textContent = countries[i].title;
    img$$.src = countries[i].imgUrl;
    btn$$.textContent = "Eliminar Div";

    countriesList$$.appendChild(div$$);
    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
    div$$.appendChild(btn$$);
    

    btn$$.addEventListener('click', function(){
        console.log("Click en botón");
        
        countriesList$$.removeChild(div$$);
    
      });   
  }
  
  console.group(countriesList$$);

 