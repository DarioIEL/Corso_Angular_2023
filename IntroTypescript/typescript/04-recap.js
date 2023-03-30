//classe descrive un tipo di dato complesso, cioè fatto con prop e metodi di vario tipo
var Computer = /** @class */ (function () {
    //il costruttore viene invocato quando utilizzerò la parola chiave new Computer(), per assegnare un valore alle prop 
    function Computer(marca, modello, ram, schermo) {
        this.marca = marca;
        this.modello = modello;
        this.ram = ram;
        this.schermo = schermo;
    }
    Computer.prototype.accendi = function () {
        var benvenuto = this.marca + " " + this.modello + " ti dà il benvenuto";
        return benvenuto;
    };
    Computer.prototype.avviaSO = function () {
        var parametriAvvio = this.ram * this.schermo;
        console.log("Parametro avvio: " + parametriAvvio);
    };
    return Computer;
}());
//creo l'oggetto "concreto", cioè l'entità reale, il computer, di tipo Computer 
var mioPC = new Computer("Dell", "Vostro", 8, 17.5);
//voglio usare il metodo accendi, questo metodo restituisce una string, per cui la devo intercettare
var stringaBenvenutoMioPC = mioPC.accendi();
console.log(stringaBenvenutoMioPC);
mioPC.avviaSO();
var Scrivania = /** @class */ (function () {
    function Scrivania(dimensione, computer) {
        this.dimensione = dimensione;
        this.computer = computer;
    }
    Scrivania.prototype.descriviScr = function () {
        console.log("Sulla scrivania c'è" + this.computer.marca + " " + this.computer.modello);
    };
    return Scrivania;
}());
var miaScrivania = new Scrivania(120, mioPC);
miaScrivania.descriviScr();
