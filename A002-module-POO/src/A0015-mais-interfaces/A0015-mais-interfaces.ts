//Declaration Merging

interface Pessoa {
  nome: string;
}

interface Pessoa {
  sobrenome: string;
}

//Quem implementar a interface pessoa vai ter que ter nome e sobrenome, pois juntou as duas interfaces
