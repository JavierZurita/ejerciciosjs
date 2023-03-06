
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    if (Object.hasOwnProperty.call(alien, key)) {
        const datos = alien[key];
        console.log(datos);
    }
}