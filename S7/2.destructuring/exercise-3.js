
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

let {name} = animalFunction();
let {race} = animalFunction();

console.log(name);
console.log(race);