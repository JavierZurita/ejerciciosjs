
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

for (let i = 0; i < alumns.length; i++) {
    let count = 0;
    if (alumns[i].T1 == true){
        count++;
    } 
    if (alumns[i].T2 == true) {
        count++;
    }
    if (alumns[i].T3 == true){
        count++;
    } 
    
    if(count >= 2){
        alumns[i].isApproved = true;
    } else {
        alumns[i].isApproved = false;
    }
}

console.log(alumns);
