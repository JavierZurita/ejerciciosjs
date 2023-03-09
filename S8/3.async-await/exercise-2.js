
function getCharacters() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((characters) => console.log(characters));
}

const getCharacters2 = async(character) => {

    const response = await fetch("https://rickandmortyapi.com/api/character");
    const responseJson = await response.json();
    console.log(responseJson);
}

//getCharacters();
getCharacters2();
