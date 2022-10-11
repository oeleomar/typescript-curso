/* Classes em TypeSCRIPT */
//Similar ao JS
//Posso utilizar classe para definir tipo

/* Maneira mais longa */
export class Empresa {
  public readonly name: string; //Acessado fora da classe e não pode ser declarado
  private readonly colaboradores: Array<Colaborador> = [];
  protected readonly CNPJ: string;

  constructor(name: string, CNPJ: string) {
    this.name = name; // Inicializando o nome
    this.CNPJ = CNPJ;
  }

  addColaborador(colaborador: Colaborador) {
    //Pode esconder o public
    this.colaboradores.push(colaborador);
  }

  getColaborador(): void {
    this.colaboradores.forEach((colaborador) => console.log(colaborador));
  }
}

const empresa1 = new Empresa('Udemy', '00.000.000/0000-00');

/* MANEIRA MAIS RAPIDA */
// public é o modificador de acesso padrão

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const colab1 = new Colaborador('Eleomar', 'Dorneles');
const colab2 = new Colaborador('Outro', 'Colaborador');
const colab3 = new Colaborador('Novo', 'Colaborador');

empresa1.addColaborador(colab1);
empresa1.addColaborador(colab2);
empresa1.addColaborador(colab3);
empresa1.getColaborador();
