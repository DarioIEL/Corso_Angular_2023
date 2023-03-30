//Variabili
//si utilizza sempre let

//sto definendo delle variabili come ho sempre fatto in JS
let numero = 1;
let presenza = true;
let parola = "Ciao";

//definisco una variabile utilizzando anche il tipo
let mioNumero: number = 33;
// mioNumero = "cinque";

let miaParola: string = "Ciao";
let miaPresenza: boolean = true;
let dataDiOggi: Date = new Date();


//con il tipo any posso assegnare qualsiasi cosa alla mia variabile
let qualcosa: any = "Dario";
qualcosa = 54;
qualcosa = false;
qualcosa = ["Pippo", "Paperino", "Pluto"];
qualcosa ={
    nome: "Aggeggio",
    cognome: "Cosa",
    id: 1
};

//Array
let mioArray: string[] = ["Ciao", "Come", "Stai", "?"];
let mioArrayNumerico: number[] = [1,2,3,4,5,6];

//Oggetti
//notazione letterale
let mioObj: object = {
    nome: "Pippo",
    cognome: "Rossi",
    id: 1,
    ruolo: "Studente",
    materie: ["Angular", "HTML", "CSS", "JS"],

    studia: function(){
        console.log(this.nome + " sta studiando...");
    }
}

//definizione di classe
class Auto{
    marca: String;
    modello: String;
    targa: String;

    //constructor è il metodo costruttore
    constructor(marca: String, modello: String, targa: String){
        this.marca = marca;
        this.modello = modello;
        this.targa = targa;
    }

    //creo un metodo
    toString(){
        return this.marca + " " + this.modello + " " + this.targa; 
    }
}

let miaAuto = new Auto("Fiat", "Panda", "ABC1234");
console.log(miaAuto.toString());


//versione compatta della definizione di classe
class Studente{
    constructor(public nome: String, public cognome: String, private matricola: String, private voto: number) {
    }

    setMatricola(matricola: String){
        //controllo che verifica se l'accesso è valido
        this.matricola = matricola;
    }

    getMatricola(): String{
        return this.matricola;
    }

    //Metodi Getters&Setters
    getVoto(): number{
        return this.voto;
    }

    setVoto(voto: number){
        let password = window.prompt("Se vuoi cambiare voto devi essere un docente. Inserisci la password!");

        if(password == "DocenteVattelapesca"){
            this.voto = voto;
            alert("Hai appena cambiato il voto dello studente");
        }else{
            alert("Mi dispiace non hai le credenziali adeguate");
        }
    }

    toString(){
        return this.nome + " " + this.cognome + this.matricola + " " + this.voto;
    }
}

let studente1 = new Studente("Anna", "Rossi", "A1", 0);

studente1.nome = "Pasquale";
studente1.cognome = "Bianchi";
studente1.setMatricola("A2");

console.log(studente1.toString());
console.log(studente1.getMatricola());
studente1.setVoto(30);

console.log( studente1.toString() );