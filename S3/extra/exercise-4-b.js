
const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  

  let btn$$ = document.querySelector('button');
  const countriesList$$ = document.createElement('div'); // Creo div padre de countries
  document.body.appendChild(countriesList$$);

  //Creo los divs hijos
  for(let i = 0; i < countries.length; i++){
  
    let div$$ = document.createElement('div');
    let h4$$ = document.createElement('h4');
    let img$$ = document.createElement('img');
    
    h4$$.textContent = countries[i].title;
    img$$.src = countries[i].imgUrl;

    countriesList$$.appendChild(div$$);
    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
    
  }
  
  console.group(countriesList$$);

  btn$$.addEventListener('click', function(){
    console.log("Click en botón");
    
    let lastDiv = countriesList$$.lastElementChild;
    console.log("Ultimo elemento " + lastDiv);
    countriesList$$.lastElementChild.remove();

  });