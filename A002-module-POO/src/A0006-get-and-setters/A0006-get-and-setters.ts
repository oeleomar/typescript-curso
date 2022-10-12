/* Getters and Setters */

export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    protected _cpf: string //POR CONVERÇÃO CASO DE CHAVE DUPLICADA É SÓ COLOCAR O _ ANTES
  ) {}
  //Maneiras Antigas

  /* Getter */
  //Serve para buscar informações privadas da class
  //Por convenção começa com get
  getNome(): string {
    return this.nome;
  }

  getIdade(): number {
    return this.idade;
  }

  /* Setters */

  setNome(nome: string): void {
    this.nome = 'Nome: ' + nome;
  }

  //MANEIRA NOVA

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set cpf(valor: string) {
    this._cpf = valor.replace(/\D/g, '');
  }

  get cpf(): string {
    return this._cpf;
  }
}

const pessoa1 = new Pessoa('Eleomar', 'Dorneles', 22, '000.000.000-00');
//Getter
const result = pessoa1.nomeCompleto;
//Setter
pessoa1.cpf = 'CPF: 00.0000.0000';
console.log(result, pessoa1.cpf);
