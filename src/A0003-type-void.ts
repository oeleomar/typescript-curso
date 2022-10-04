//Void type
//Função ou método não retorna nada

function semRetorno(...args: string[]) {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otavio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luiz', 'Eleomar', 'Dorneles');
pessoa.exibirNome();

export { pessoa };
