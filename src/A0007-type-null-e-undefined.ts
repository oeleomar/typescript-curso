//Type null and undefined
//Ambom representam o mesmo valor porém usados para momento direferente

let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson( //No caso do ? é o tipo || undefined
  firstName: string,
  lastName?: string
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  //Retornando ou number ou Null
  if (typeof x === 'number') return x * x;
  return null;
}
