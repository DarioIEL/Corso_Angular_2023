//implementare un'interfaccia persona (nome, cognome, matricola, studia())
//implementare una classe Studente, una classe Docente. Entrambe implementeranno l'interfaccia persona con il metodo private assegnaVoto() per il docente e private accettaVoto() per lo studente

//implenta una classe Aula con all'interno docenti e studenti. Nel costruttore verranno creati docenti e studenti. Un metodo testStudenti() che scrive il nome degli studenti. 

interface Persona{
    nome: string;
    cognome: string;
    matricola: string;

    studia(): void;
}

class Docente implements Persona{
    nome: string;
    cognome: string;
    matricola: string;

    constructor(nome: string, cognome: string, matricola: string){
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }

    studia(): void {
        
    }
    
    private assegnaVoto(): void{

    }
    
}

class Studente implements Persona{
    nome: string;
    cognome: string;
    matricola: string;
   
    constructor(nome: string, cognome: string, matricola: string){
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola ;
    }
    
    studia(): void {
        
    }

    private accettaVoto(): void{
        
    }
}

class Aula{
    //docenti e studenti sono array di tipo DOcente e Studente
    nome: string;
    docente: Docente;
    studenti: Studente[] = [];
    
    constructor(nome: string, docente: Docente){
        this.nome = nome;
        this.docente = docente;
        this.studenti = [
            new Studente("Pippo", "Rossi", "1A1"),
            new Studente("Luca", "Bianchi", "1A2"),
            new Studente("Anna", "Verdi", "1A3"),
            new Studente("Paola", "GIalli", "1A4")
        ];
    }

    descriviAula(): string{
        let descrizione = "Aula " + this.nome + " Docente: " + this.docente.nome + " " + this.docente.cognome;
        
        let listaStudenti = "";

        for(let i = 0; i < this.studenti.length; i++){
            listaStudenti += this.studenti[i].nome + " ";
        }

        //array.forEach(param => { })

        return descrizione + " lista Studenti " + listaStudenti;
    }
}

let docente = new Docente("Dario", "Mennillo", "1A123");

let aulaAng = new Aula("Aula Angular Red", docente);

let descrizioneAula = aulaAng.descriviAula();

console.log(descrizioneAula);