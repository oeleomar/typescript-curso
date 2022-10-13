/* Relação do tipo tem 1  associacao*/
//Chamada de associação fraca
//Uma classe não depende da outra.
//No nosso exemplo o escritor não depende da ferramente, porém consegue utilizar ela

export class Escritor {
  private _ferramenta: Ferramenta | null = null; //Pode existir ou não

  constructor(private _name: string) {}

  get nome(): string {
    return this._name;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    if (this._ferramenta) return this._ferramenta;
    return null;
  }

  escrever(): void {
    if (this._ferramenta === null)
      return console.log('Não posso escrever sem ferramenta');

    this._ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}

const escritor = new Escritor('Luiz');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Maquina de Escrever');

console.log(escritor.nome);
escritor.escrever();
escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = maquinaEscrever;
escritor.escrever();
escritor.ferramenta = null;
