//Parametros para decorators

//Passo o parâmetro já na chamada do decorator
@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public name: string, public cor: string) {
    console.log('Sou a classe');
  }
}

//Encapsular a função dentro de outra para receber valores por parâmetros
function inverteNomeECor(param1: string, param2: string) {
  //Deve retornar a função decoradora
  return function <T extends new (...args: any[]) => any>(target: T): T {
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

const animaL = new Animal('nome', 'roxo');
console.log(animaL);
