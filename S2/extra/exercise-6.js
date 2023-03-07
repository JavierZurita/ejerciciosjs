
function swap(array, index1, index2){

    [array[index1], array[index2]] = [array[index2], array[index1]];
    
}

array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

console.log("Array antes del cambio: " + array);
swap(array, 1, 3);
console.log("Array despues del cambio: " + array);