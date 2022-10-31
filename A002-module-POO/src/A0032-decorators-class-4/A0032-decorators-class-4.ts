@outroDecorador //Chamado por 2º
@inverteNomeECor('valor1', 'valor2') //Chamado 1º
export class Animal {
  constructor(public name: string, public cor: string) {
    console.log('Sou a classe');
  }
}

type Constructor = new (...args: any[]) => any;

function inverteNomeECor(param1: string, param2: string) {
  //Deve retornar a função decoradora
  return function <T extends Constructor>(target: T): T {
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
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function outroDecorador(target: Constructor) {
  console.log('Sou o outro decorador');
}

const animaL = new Animal('nome', 'roxo');
console.log(animaL);
