/* Tipando o this dentro da função */
//This não é argumento da função

export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

funcao.call(new Date(), 'Ola', 30); //Quando usado o call, o primeiro argumento é o this
funcao.apply(new Date(), ['Olá', 30]); // Posso passar os argumentos dentro de um array usando o Apply

/* const arrowFunction = (this: Date, name: string, age: number) => {
  //Impossível usar o this em arrowFuntion
  console.log(this);
  console.log(name, age);
};
 */
//arrowFunction.call(new Date(), 'Nome', 22); // Não funciona!!
