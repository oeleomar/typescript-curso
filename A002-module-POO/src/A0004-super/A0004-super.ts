/* Super para acesso a super classe */

//Super class
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

//SubClasse
//Herdando classe pessoa
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    console.log('Acessando a super class');
    return super.getNomeCompleto(); //Fazendo o uso para acessar propriedades da super class
  }
}
export class Aluno extends Pessoa {
  //Utilizando o super para criar novas propriedades dentro da classe
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    protected sala: string
  ) {
    super(nome, sobrenome, idade, cpf); //Estou apenas repassando os valores para a classe pessoa
    //Gerando a nova propriedade sala
  }
  getNomeCompleto(): string {
    return `Isso vem do Aluno: ${this.nome} ${this.sobrenome} que pertence a sala ${this.sala}`;
  }
}

const pessoa1 = new Pessoa('Eleomar', 'Dorneles', 22, '000.000.000-00');
const aluno = new Aluno(
  'Aluno',
  'SobrenomeAluno',
  30,
  '000.000.000-00',
  'SALA 01-A'
);
const cliente = new Cliente('Cliente', 'SobrenomeAluno', 30, '000.000.000-00');

console.log(pessoa1.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
