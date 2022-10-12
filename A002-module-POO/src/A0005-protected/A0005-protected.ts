/* Modificador de acesso protected */
//Permite acesso dentro da classe e dentro das sub classes

export class Empresa {
  protected readonly colaboradores: Array<Colaborador> = [];
  constructor(public nome: string, protected readonly cnpj: string) {}

  setColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/1111-1');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const colaborador1 = new Colaborador('Colab1', 'Sobre1');
const colaborador2 = new Colaborador('Colab2', 'Sobre2');

const udemy = new Udemy();
udemy.setColaborador(colaborador1);
udemy.setColaborador(colaborador2);

console.log(udemy);
udemy.popColaborador();
console.log(udemy);
