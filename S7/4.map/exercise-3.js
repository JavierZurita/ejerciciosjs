
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const lista = cities.map((city) => {
    
    return city.isVisited ?  name = `${city.name} (Visitado)` : city.name  ;

});

console.log(lista);