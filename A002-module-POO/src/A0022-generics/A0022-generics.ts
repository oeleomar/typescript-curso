//Generics
//Parâmetros dentro da tipagem

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.filter((value) => value < 5));

//Fazer a função filtro
//Repasso para o type como se fosse um parâmetro de tipagem
type FilterCallBack<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallBack<T>): T[] {
  //Tipo genérico
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const meuNovoArray = meuFilter(array, (value) => value < 5);
console.log(meuNovoArray);
