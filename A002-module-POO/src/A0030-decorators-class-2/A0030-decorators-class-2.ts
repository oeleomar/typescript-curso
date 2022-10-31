//Ordem de chamada DECORATORS
//O decorador quando chamado utilizando o @, ele é chamado no momento da criação da classe,
// E não da instancia dela. Logo quando o código for executado, mesmo que a classe não seja instanciada,
// o decorador é chamado

@inverteNomeECor
export class Animal {
  constructor(public name: string, public cor: string) {
    console.log('Sou a classe');
  }
}

function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorador e recebi ', target);
  //Extendendo para uma classe anonima
  return class extends target {
    cor: string;
    nome: string;
    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

//Posso instanciar sem passar pelo decorator
const animaL = new Animal('nome', 'roxo');
console.log(animaL);
