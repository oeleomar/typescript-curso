//Interface

type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

//Posso implementar todos os tipos
type CPF = {
  cpf: string;
};

interface Nome {
  nome: string;
}

interface Sobrenome {
  sobrenome: string;
}

interface NomeCompleto {
  nomeCompleto(): string;
}

export interface Pessoa extends Nome, Sobrenome, NomeCompleto {}

export class Pessoa implements Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public cpf: string
  ) {}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa1 = new Pessoa('Eleomar', 'Dorneles', '000.000.000-00');
console.log(pessoa1.nomeCompleto());
