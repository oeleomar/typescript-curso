//Chaves em tipos

type Veiculo = {
  marca: string;
  ano: string;
};

//Espelhamento

type Car = {
  brand: Veiculo['marca']; //Buscando por chaves os tipos
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'ford',
  year: '2020',
  name: 'Nome',
};
