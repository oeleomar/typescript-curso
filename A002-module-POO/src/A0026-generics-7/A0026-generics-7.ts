//Predicação de tipos
//Type predicate

//Type predicate
export function isNumber(value: unknown): value is number {
  //Sempre que for true vai ser number
  return typeof value === 'number';
}

console.log(isNumber(''));

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }

    return sum;
  }, 0);

  return retorno;
}

console.log(soma(...[1, 2, 3, 'a', 'b', 'c']));
