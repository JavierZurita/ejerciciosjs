
function findArrayIndex(array, text) {

    for(i = 0; i < array.length; i++){

        if(array[i] === text){

            return i;
        }
    }

}

function removeItem(array, text){

    array.splice(text, 1);
    console.log(array);
    return array;
}

let i;
array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

findArrayIndex(array, "Ajolote");
console.log("Index out " + i);
removeItem(array, i);