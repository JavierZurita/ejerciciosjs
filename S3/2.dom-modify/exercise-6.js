
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul$$ = document.createElement('ul');

for(i = 0; i < apps.length; i++){
    
    console.log("Apps[i]: " + apps[i]);
    let li$$ = document.createElement('li');
    
    li$$.textContent = apps[i];
    console.log("li: " + li$$);

    ul$$.appendChild(li$$);
}

document.body.appendChild(ul$$);