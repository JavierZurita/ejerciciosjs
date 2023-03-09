
const userAnwsers = [];


function confirmExample(description){
   confirm(description);
}

function promptExample(description){
    prompt(description);
}

function father(texto,funcion){
    
    funcion(texto);
}

father("Quieres continuar?", confirmExample);
father("Ingresa tu nombre", promptExample);

console.log(userAnwsers);