//classe descrive un tipo di dato complesso, cioè fatto con prop e metodi di vario tipo

class Computer{
    //definisco le caratteristiche del computer, cioè delineo le sue propr e i suoi metodi 
    marca: string;
    modello: string;
    ram: number;
    schermo: number;

    //il costruttore viene invocato quando utilizzerò la parola chiave new Computer(), per assegnare un valore alle prop 
    constructor(marca: string, modello: string, ram: number, schermo: number){
        this.marca = marca;
        this.modello = modello;
        this.ram = ram;
        this.schermo = schermo;
    }

    accendi(): string{
        let benvenuto = this.marca + " " + this.modello + " ti dà il benvenuto";
        return benvenuto;
    }

    avviaSO(): void{
        let parametriAvvio = this.ram * this.schermo;
        console.log("Parametro avvio: " + parametriAvvio);
    }
}

//creo l'oggetto "concreto", cioè l'entità reale, il computer, di tipo Computer 
let mioPC = new Computer("Dell", "Vostro", 8, 17.5);

//voglio usare il metodo accendi, questo metodo restituisce una string, per cui la devo intercettare
let stringaBenvenutoMioPC = mioPC.accendi();
console.log(stringaBenvenutoMioPC);

mioPC.avviaSO();


class Scrivania {

    dimensione: number;
    computer: Computer;

    constructor(dimensione: number, computer: Computer) {
        this.dimensione = dimensione;
        this.computer = computer
    }

    descriviScr(): void{
        console.log("Sulla scrivania c'è" + this.computer.marca + " " + this.computer.modello);
        
    }
}


let miaScrivania = new Scrivania(120, mioPC);
miaScrivania.descriviScr();

