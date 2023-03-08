
const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  

  let btn$$ = document.querySelector('button');
  const countriesList$$ = document.createElement('ul'); // Creo div padre de countries
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

  btn$$.addEventListener('click', removeConEvent);


  function removeSinEvent(){
    console.log("Click en botón");
    
    console.log("Ultimo elemento " + countriesList$$.lastElementChild);
    countriesList$$.lastElementChild.remove();

  }

  function removeConEvent(event){
    
    let div$$ = document.querySelectorAll('div');
    
    div$$[div$$.length-1].remove();

  }