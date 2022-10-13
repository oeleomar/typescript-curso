/* Métodos e atributos estáticos */
//Pode ser chamado sem instanciar a classe
//Não pode ser acessado pelo objeto instanciado
//Dentro da classe eu não consigo acessar métodos ou atributos estáticos com o THIS

export class Pessoa {
  //atributos estáticos
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}
  //Métodos estáticos
  static falaOi() {
    console.log('Olá mundo');
  }

  //Factory method
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Eleomar', 'Dorneles', 22, '000.000.000-00');
Pessoa.falaOi();
const pessoa2 = Pessoa.criaPessoa('Nova', 'Pessoa');
console.log(pessoa1, pessoa2);
