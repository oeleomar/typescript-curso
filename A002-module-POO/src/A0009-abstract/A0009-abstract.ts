/* Classes, métodos, atributos abstratos */
// Uma classe que é usada apenas para implementação que não será instanciada
// Uma classe abstrata não pode ser instanciada diretamente

export abstract class Personagem {
  //Quando eu desejo que cada classe extendida tenha um atributo obrigatório
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number
  ) {}

  atacar(personagem: Personagem): void {
    console.log(this.name + ' Está atacando');
    personagem.loseLife(this.attack);
  }

  loseLife(attackForce: number): void {
    this.life -= attackForce;
    console.log(`${this.emoji} - ${this.name} agora tem ${this.life}`);
  }

  //Quando eu preciso que todas as classes precisam ter um método
  //É apenas criar um método abstrato ex:
  abstract warScreen(): void;
  //Agora com isso é necessário criar o método dentro de toda classe que extendeu elas
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  warScreen() {
    console.log(this.emoji + 'Guerreira ao ataque');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  warScreen() {
    console.log(this.emoji + 'Monstros');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 80, 800);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
