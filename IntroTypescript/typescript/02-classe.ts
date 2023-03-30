class Docente {

    private nome: string;
    private cognome: string;
    public corso: string;

    constructor(nome: string, cognome: string, corso: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.corso = corso;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCognome(): string {
        return this.cognome;
    }

    public setCognome(cognome: string): void {
        this.cognome = cognome;
    }
}

interface Veicolo {
    ruote: number;
    accelera(): void;
}

interface Motore {
    aumentaPotenza(): number;
    diminuisciPotenza(): number;
}


class Motocicletta implements Motore, Veicolo {
    
    ruote: number = 2;
    velocita: number = 0;

    constructor(public marca: string, public modello: string, private cilindrata: number) {}

    accelera(): void {
        this.velocita = this.aumentaPotenza() * 5;    
    }

    aumentaPotenza(): number {
        let potenza = 100
        return potenza;
    }

    diminuisciPotenza(): number {
        let potenza = 50;
        return potenza;
    }

    public getCilindrata(): number {
        return this.cilindrata;
    }

    public setCilindrata(cilindrata: number): void {
        this.cilindrata = cilindrata;
    }
}


let miaMoto = new Motocicletta("Kawasaki", "z750", 750);
miaMoto.aumentaPotenza();
miaMoto.accelera();
console.log(miaMoto.velocita);