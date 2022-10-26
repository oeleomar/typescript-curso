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

export class Pessoa implements TipoPessoa, CPF {
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
