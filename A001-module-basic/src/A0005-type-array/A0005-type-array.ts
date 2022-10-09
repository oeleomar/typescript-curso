//Type Array
// tipo[] ou Array<tipo>

function multiplcaArgs(...args: Array<number>): number {
  //Vai retornar um number a partir do array de number
  return args.reduce((acc, valor) => acc * valor, 1);
}

const result = multiplcaArgs(1, 2, 3, 4, 5, 6, 7);
console.log(result);

export { result }; //Mudando o arquivo para module mode

function concatStrings(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor);
}

const concat = concatStrings('Eleomar', ' ', 'Dorneles');
console.log(concat);

const arrayImutavel: readonly string[] = ['Eleomar', 'Dorneles']; //Array imutável previne ações como POP e PUSH
const arrayImutavel2: ReadonlyArray<string> = ['Eleomar', 'Dorneles']; //Array imutável previne ações como POP e PUSH
console.log(arrayImutavel);
console.log(arrayImutavel2);
