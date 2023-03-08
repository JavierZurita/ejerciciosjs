
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

let input$$ = document.querySelector('input');

input$$.addEventListener('input', function(){
    console.log(input$$.value);

    const array = streamers.filter((streamer) => {

        if(streamer.name.toLowerCase().includes(input$$.value.toLowerCase())){
            return streamer;
        }   
        return false;
        }
    );
    console.log(array);

    }
);


