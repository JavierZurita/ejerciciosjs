const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const array = streamers.filter(streamer => {

    if(streamer.gameMorePlayed.includes("Legends")){

        if(streamer.age > 30){
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        }
        return streamer;
    }

});

console.log(array);