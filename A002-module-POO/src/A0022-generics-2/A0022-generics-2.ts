//Array e Promises

const arrayNumbers: Array<number> = [1, 2, 3];
console.log(arrayNumbers);

async function promiseAsync(): Promise<number> {
  return 1;
}

function promisse(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
promisse().then((resultado) => console.log(resultado + 1));
