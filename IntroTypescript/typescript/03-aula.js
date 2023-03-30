//implementare un'interfaccia persona (nome, cognome, matricola, studia())
//implementare una classe Studente, una classe Docente. Entrambe implementeranno l'interfaccia persona con il metodo private assegnaVoto() per il docente e private accettaVoto() per lo studente
var Docente = /** @class */ (function () {
    function Docente(nome, cognome, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }
    Docente.prototype.studia = function () {
    };
    Docente.prototype.assegnaVoto = function () {
    };
    return Docente;
}());
var Studente = /** @class */ (function () {
    function Studente(nome, cognome, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }
    Studente.prototype.studia = function () {
    };
    Studente.prototype.accettaVoto = function () {
    };
    return Studente;
}());
var Aula = /** @class */ (function () {
    function Aula(nome, docente) {
        this.studenti = [];
        this.nome = nome;
        this.docente = docente;
        this.studenti = [
            new Studente("Pippo", "Rossi", "1A1"),
            new Studente("Luca", "Bianchi", "1A2"),
            new Studente("Anna", "Verdi", "1A3"),
            new Studente("Paola", "GIalli", "1A4")
        ];
    }
    Aula.prototype.descriviAula = function () {
        var descrizione = "Aula " + this.nome + " Docente: " + this.docente.nome + " " + this.docente.cognome;
        var listaStudenti = "";
        for (var i = 0; i < this.studenti.length; i++) {
            listaStudenti += this.studenti[i].nome + " ";
        }
        //array.forEach(param => { })
        return descrizione + " lista Studenti " + listaStudenti;
    };
    return Aula;
}());
var docente = new Docente("Dario", "Mennillo", "1A123");
var aulaAng = new Aula("Aula Angular Red", docente);
var descrizioneAula = aulaAng.descriviAula();
console.log(descrizioneAula);
