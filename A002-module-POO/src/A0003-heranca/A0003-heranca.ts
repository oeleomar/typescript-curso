/* Herança */
//
export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  getSobrenome(): string {
    return this.sobrenome;
  }

  getIdade(): number {
    return this.idade;
  }
}
//Herdando classe pessoa
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Cliente: ${this.nome} ${this.sobrenome}`;
  }
}
export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Aluno: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa1 = new Pessoa('Eleomar', 'Dorneles', 22, '000.000.000-00');
const aluno = new Aluno('Aluno', 'SobrenomeAluno', 30, '000.000.000-00');
const cliente = new Cliente('Cliente', 'SobrenomeAluno', 30, '000.000.000-00');

console.log(pessoa1.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
