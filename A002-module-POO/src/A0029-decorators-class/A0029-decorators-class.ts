//Decorators
//Um objeto impostor
// Observar o que o objeto faz
//Quando se deseja não alterar na classe original

//Decorator sem TS
/* export class Animal {
  constructor(public name: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
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

const AnimalDecorated = decorator(Animal);
const animaL = new AnimalDecorated('nome', 'roxo');
console.log(animaL);
 */

//Com TS
@decorator //Estou informando que quero que a classe passe pelo decorator no momento de instancia
export class Animal {
  constructor(public name: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
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
