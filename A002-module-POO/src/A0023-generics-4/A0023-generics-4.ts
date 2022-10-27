//Generic constrains
//Quando uma tipagem genérica é muito ampla
//Extends dentro de generics é uma restrição

type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K]; //K extende as chaves de O

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Preto',
  vacinas: ['Vacina 1', 'Vacina 2'],
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
