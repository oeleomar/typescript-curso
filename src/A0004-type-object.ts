// Type Object

//Mais Seguro
const objetoA = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

objetoA.chaveA = 'Outro valor';
//Não posso inserir novas chaves
//objetoA.chaveC = 'ValorC';

//Menos seguro
// unknown mais abrangente que any
const objetoB: Record<string, unknown> = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

objetoB.chaveA = 'Novo valor';
//Posso inserir novas chaves
objetoB.chaveC = 'ChaveC';

const objetoC: {
  chaveA: string;
  chaveB: string;
  chaveC?: string; //? - Opcional
  [key: string]: unknown; //Posso adicionar N chaves
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

objetoC.chaveA = 'Funciona assim';
objetoC.chaveC = 'Agora posso adicionar';
objetoC.chaveD = 'Objeto mais aberto';

const objetoD: {
  chaveA: string;
  readonly chaveB: string; //Apenas leitura, não posso alterar o valor
  chaveC?: string; //? - Opcional
  [key: string]: unknown; //Posso adicionar N chaves
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

objetoD.chaveA = 'Olá';
