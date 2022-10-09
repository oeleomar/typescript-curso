//Type tuple
//[tipo, tipo]

const dadosClientes: [number, string] = [1, 'Eleomar']; //Tipo tupla
const dadosCliente1: [number, string, string] = [1, 'Eleomar', 'Dorneles'];
const dadosCliente2: [number, string, string?] = [1, 'Eleomar']; //Ultimo valor opcional
const dadosCliente3: readonly [number, string, string?, ...string[]] = [
  //imutável por conta do readonly (previse pop and)
  1,
  'Eleomar',
  'Dorneles',
  'Luiz',
]; //Com valores opcionais e qualquer valor adicionado vai ser umas string

dadosClientes[0] = 10; //Posso alterar o valor
dadosClientes[1] = 'Dorneles';
//dadosClientes[2] = 'Dorneles' //Não posso passar valores para dentro do array
//Porém da para enviar valores com push, e retirar com POP
console.log(dadosClientes);
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
