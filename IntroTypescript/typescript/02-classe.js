var Docente = /** @class */ (function () {
    function Docente(nome, cognome, corso) {
        this.nome = nome;
        this.cognome = cognome;
        this.corso = corso;
    }
    Docente.prototype.getNome = function () {
        return this.nome;
    };
    Docente.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Docente.prototype.getCognome = function () {
        return this.cognome;
    };
    Docente.prototype.setCognome = function (cognome) {
        this.cognome = cognome;
    };
    return Docente;
}());
var Motocicletta = /** @class */ (function () {
    function Motocicletta(marca, modello, cilindrata) {
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
        this.ruote = 2;
        this.velocita = 0;
    }
    Motocicletta.prototype.accelera = function () {
        this.velocita = this.aumentaPotenza() * 5;
    };
    Motocicletta.prototype.aumentaPotenza = function () {
        var potenza = 100;
        return potenza;
    };
    Motocicletta.prototype.diminuisciPotenza = function () {
        var potenza = 50;
        return potenza;
    };
    Motocicletta.prototype.getCilindrata = function () {
        return this.cilindrata;
    };
    Motocicletta.prototype.setCilindrata = function (cilindrata) {
        this.cilindrata = cilindrata;
    };
    return Motocicletta;
}());
var miaMoto = new Motocicletta("Kawasaki", "z750", 750);
miaMoto.aumentaPotenza();
miaMoto.accelera();
console.log(miaMoto.velocita);
