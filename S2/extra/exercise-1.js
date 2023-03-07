
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const categoriesArray = [];
/*
for (const movie of movies) {
    
    let i = movies.indexOf(movie);

        for (const categorie of movies[i].categories) {

            let j = movies[i].categories.indexOf(categorie);

            if(!categories.includes(movies[i].categories[j])){
                categories.push(movies[i].categories[j]);
            } 
    }
}
*/

for (const movie of movies) {


        for (const categorie of movie.categories) {

            if(!categoriesArray.includes(categorie)){
                categoriesArray.push(categorie);
            } 
    }
}

console.log(categoriesArray);
