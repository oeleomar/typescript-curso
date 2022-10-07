/* type-intersection */
// Usado como & (and)

//Criar interfaces maiores

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome | TemSobrenome | TemIdade; //Union types
type PessoaObrigatorio = TemNome & TemSobrenome & TemIdade; //Intersection Types

const pessoa1: Pessoa = {
  nome: 'Eleomar',
};

const pessoa2: PessoaObrigatorio = {
  nome: 'Eleomar',
  sobrenome: 'Dorneles',
  idade: 22,
};

console.log(pessoa1, pessoa2);

//Quando se tem tipos repetidos pega-se a intersecção

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Letter = AB & AC; //Tipo é A
