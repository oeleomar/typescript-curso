//Decorators de method
//Posso decorar properties, methods

function decorador(
  classPrototype: any,
  nomeMethod: string,
  descriptor: PropertyDescriptor
): any {
  console.log(classPrototype);
  console.log(nomeMethod);
  console.log(descriptor);

  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
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

  @decorador
  metodo(msg: string): string {
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
