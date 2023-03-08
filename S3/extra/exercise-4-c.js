
const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  

  // btn$$ = document.querySelector('button');
  const countriesList$$ = document.createElement('ul'); // Creo div padre de countries
  document.body.appendChild(countriesList$$);

  //Creo los divs hijos
  for(let i = 0; i < countries.length; i++){
  
    let li$$ = document.createElement('li');
    let div$$ = document.createElement('div');
    let h4$$ = document.createElement('h4');
    let img$$ = document.createElement('img');
    let btn$$ = document.createElement('button')

    h4$$.textContent = countries[i].title;
    img$$.src = countries[i].imgUrl;
    btn$$.textContent = "Eliminar Div";

    countriesList$$.appendChild(li$$);
    li$$.appendChild(div$$);
    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
    div$$.appendChild(btn$$);
    
     btn$$.addEventListener('click',deleteDiv);
     
     /*function deleteDiv (event) {
      let div$$ = document.querySelectorAll('div');
      console.log(div$$.length);
      event.target.parentNode.parentNode.remove();
      }
    );
    */
     


     /*function(){
    //     console.log("Click en botón");
        
    //     countriesList$$.removeChild(div$$);
    
    //   }
    // ); */ 


  }
   
  console.log(countriesList$$);

  function deleteDiv (event) {
    let div$$ = document.querySelectorAll('div');
    console.log(div$$.length);
    event.target.parentNode.parentNode.remove();
  }