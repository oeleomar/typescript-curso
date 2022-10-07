/* Type alias */

type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};
//Unindo dois tipos
type Cores = 'Vermelho' | 'Verde' | 'Azul';
type CoresCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = Cores | CoresCMYK;

const pessoa: Pessoa = {
  nome: 'Eleomar',
  idade: 20,
  salario: 250_000, //Entendo sem o _ apenas para melhorar a escrita
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Verde'));
export { pessoa };
