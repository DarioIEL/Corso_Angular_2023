let saluto = "Ciao";

function salutaStudente() {
    let nomeStud = "Pippo";
    let etaStud = 25;
    console.log(nomeStud);
    return "Ciao " + nomeStud + " " + etaStud;
}

console.log(salutaStudente());

var nomeUser = "Admin";
var presenzaUser = true;
var idUser = 10;
var tipoAccount = "Super";

console.log(typeof nomeUser);
console.log(typeof presenzaUser);
console.log(typeof idUser);
console.log(typeof tipoAccount);

// const titolo = document.querySelector("#titolo");
const titolo = document.getElementById("titolo");
titolo.innerHTML = salutaStudente();

//evento
//oggetto notazione letterale
var utente = {
    nome: "Basic33",
    ruolo: "Admin",
    id: 12
}

// class Utente{
//     nome;
//     ruolo;
//     id;
//     constructor(nome, ruolo, id){
//         this.nome = nome;
//         this.ruolo = ruolo;
//         this.id = id;
//     }
// }

///con funz costruttore
function Utente(nome, ruolo, id){
    this.nome = nome;
    this.ruolo = ruolo;
    this.id = id;

    this.login = function(){

    }
}

var mioUser = new Utente("Advanced44", "Admin", 56);

var infoUser = document.getElementById("infoUser");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    infoUser.innerHTML = "User: " + mioUser.nome + " " + mioUser.ruolo + " " + mioUser.id;
});

var numero = 10;
numero = "dieci";
numero = ["1", "0"];

