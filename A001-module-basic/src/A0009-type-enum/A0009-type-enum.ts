// Type enum
// Estrutura de dados não ordenada

enum Cores { //Sempre letra maiúsculas
  VERMELHO, //0
  AZUL, //1
  AMARELO = 200, //200 Setando manualmente
  ROXO = 'ROXO',
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);

enum Cores { //Merge de ENUMS, vai se misturar com o de cima
  ROSA = 'ROSA',
}
// Ex:
function chooseColor(color: Cores): void {
  console.log(Cores[color]);
}

chooseColor(1);
