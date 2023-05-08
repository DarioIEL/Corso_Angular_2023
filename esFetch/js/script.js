
var demo = document.querySelector("#demo");

const URL = "https://reqres.in/api/users?page=1";

let persone = []

fetch(URL)
.then(data => {return data.json()})
.then(response =>{
    console.log(response);
    persone = response.data;
    
    persone.forEach(persona => {
        demo.innerHTML += persona.first_name + "<br>";
      
        
    });
});

console.log(persone);

