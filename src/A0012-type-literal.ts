/* Tipos literais */
//Usar valores como tipos

let x = 10; //eslint-disable-line
x = 0b1010;
//x = 'Eleomar' //Não tem como
const y = 10; // tipo 10 não number

const z = 10 as const;
//a = 20; //Não tem como pois esse é um tipo literal
export { x };

const pessoa = {
  nome: 'Eleomar' as const, //Tipo:Eleomar
  sobrenome: 'Dorneles',
};
