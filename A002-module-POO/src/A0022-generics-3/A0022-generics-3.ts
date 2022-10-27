interface PessoaProtocolo<T = string, U = number> {
  //Valores padrão
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'Eleomar',
  sobrenome: 'Dorneles',
  idade: 22,
};

const aluno1: PessoaProtocolo<number, number> = {
  nome: 1234,
  sobrenome: 1234,
  idade: 22,
};

console.log(aluno, aluno1);
