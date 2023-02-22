//Usado para criar blocos de códigos

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace MeuNamespace {
  //Eslint vai reclamar
  console.log(11111);

  const nome = 'Eleomar';

  class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Eleomar');
}
