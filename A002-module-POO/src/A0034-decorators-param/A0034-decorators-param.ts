//Decorator de param
//Atualmente serve apenas para assistir o parâmetro

function decorador(
  classPrototype: any,
  nomeMethod: string,
  index: number
): any {
  console.log(classPrototype);
  console.log(nomeMethod);
  console.log(index);
}

export class UmaPesso {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  //Assistindo o parâmetro
  metodo(@decorador msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}
