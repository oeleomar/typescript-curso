// Overload de funções
//No campo de tipo

type AdderOnly = (x: number) => number; // Normal, porém ela só pode receber X como parâmetro
type Adder = {
  (x: number): number; // Posso receber só X
  (x: number, y: number): number; //Posso receber X e Y
  (...arg: number[]): number; // Posso receger um array de números
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  //Preciso chegar os parametros que recebi
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);

  return x + (y || 0);
};
