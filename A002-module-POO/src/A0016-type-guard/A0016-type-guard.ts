/* Type guard */

export function add(a: unknown, b: unknown): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(1, 5));

type Pessoa = { nome: string; tipo: 'pessoa' };
type Animal = { cor: string; tipo: 'animal' };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal) {
  if ('nome' in obj) console.log(obj.nome); //Type Guard
  if (obj instanceof Aluno) console.log(obj.nome); //Type Guard

  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      break;
  }
}

mostraNome(new Aluno('Joao'));
