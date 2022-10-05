/* Type Never */
//Método ou função nunca vai retornar nada;
//Laço infinito ou lança erros

function newError(): never {
  throw new Error('Erro');
}

newError();
