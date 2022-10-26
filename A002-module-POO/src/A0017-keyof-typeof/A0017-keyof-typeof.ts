/* keyof typeof */

type CoresObj = typeof coresObj;
type CoresChave = keyof CoresObj; //Pegando apenas as chaves de dentro do tipo Ex: "vermelho" | "verde" | "azul"

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzirCor(
  cor: 'vermelho' | 'verde' | 'azul',
  cores: typeof coresObj //Um tipo igual o type
) {
  return cores[cor];
}
console.log(traduzirCor('vermelho', coresObj));
