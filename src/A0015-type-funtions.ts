/* Type funcitons */

type MapStringCallback = (item: string) => string;

export function mapString(
  array: Array<string>,
  callbackfn: MapStringCallback //Usando o type aqui.
): Array<string> {
  const newArray: Array<string> = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());

console.log(abc, abcMapped);
