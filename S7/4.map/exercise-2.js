
const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const addAnacleto = users.map((user) => {
    
    return user.name[0] == "A" ? {...user,name: "Anacleto"} : user; 

})

console.log(addAnacleto);