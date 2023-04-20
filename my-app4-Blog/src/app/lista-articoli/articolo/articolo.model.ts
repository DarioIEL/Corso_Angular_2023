export class Articolo{

  titolo: string;
  link: string;
  voto: number;

  constructor(titolo: string, link: string, voto: number){
    this.titolo = titolo;
    this.link = link;
    this.voto = voto;
  }

  voteUp(): void{
    this.voto += 1;
  }

  voteDown(): void{
    this.voto -= 1;
  }
}
