//Variabili
//si utilizza sempre let
//sto definendo delle variabili come ho sempre fatto in JS
var numero = 1;
var presenza = true;
var parola = "Ciao";
//definisco una variabile utilizzando anche il tipo
var mioNumero = 33;
// mioNumero = "cinque";
var miaParola = "Ciao";
var miaPresenza = true;
var dataDiOggi = new Date();
//con il tipo any posso assegnare qualsiasi cosa alla mia variabile
var qualcosa = "Dario";
qualcosa = 54;
qualcosa = false;
qualcosa = ["Pippo", "Paperino", "Pluto"];
qualcosa = {
    nome: "Aggeggio",
    cognome: "Cosa",
    id: 1
};
//Array
var mioArray = ["Ciao", "Come", "Stai", "?"];
var mioArrayNumerico = [1, 2, 3, 4, 5, 6];
//Oggetti
//notazione letterale
var mioObj = {
    nome: "Pippo",
    cognome: "Rossi",
    id: 1,
    ruolo: "Studente",
    materie: ["Angular", "HTML", "CSS", "JS"],
    studia: function () {
        console.log(this.nome + " sta studiando...");
    }
};
//definizione di classe
var Auto = /** @class */ (function () {
    //constructor è il metodo costruttore
    function Auto(marca, modello, targa) {
        this.marca = marca;
        this.modello = modello;
        this.targa = targa;
    }
    //creo un metodo
    Auto.prototype.toString = function () {
        return this.marca + " " + this.modello + " " + this.targa;
    };
    return Auto;
}());
var miaAuto = new Auto("Fiat", "Panda", "ABC1234");
console.log(miaAuto.toString());
//versione compatta della definizione di classe
var Studente = /** @class */ (function () {
    function Studente(nome, cognome, matricola, voto) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
        this.voto = voto;
    }
    Studente.prototype.setMatricola = function (matricola) {
        //controllo che verifica se l'accesso è valido
        this.matricola = matricola;
    };
    Studente.prototype.getMatricola = function () {
        return this.matricola;
    };
    //Metodi Getters&Setters
    Studente.prototype.getVoto = function () {
        return this.voto;
    };
    Studente.prototype.setVoto = function (voto) {
        var password = window.prompt("Se vuoi cambiare voto devi essere un docente. Inserisci la password!");
        if (password == "DocenteVattelapesca") {
            this.voto = voto;
            alert("Hai appena cambiato il voto dello studente");
        }
        else {
            alert("Mi dispiace non hai le credenziali adeguate");
        }
    };
    Studente.prototype.toString = function () {
        return this.nome + " " + this.cognome + this.matricola + " " + this.voto;
    };
    return Studente;
}());
var studente1 = new Studente("Anna", "Rossi", "A1", 0);
studente1.nome = "Pasquale";
studente1.cognome = "Bianchi";
studente1.setMatricola("A2");
console.log(studente1.toString());
console.log(studente1.getMatricola());
studente1.setVoto(30);
console.log(studente1.toString());
