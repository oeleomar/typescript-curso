/* Modificadores de acesso */
//Pode modificar propriedades e métodos

/* Private */
//Só é acessível dentro da classe que foi criado
//Muito utilizado no encapsulamento
//Quando se trabalha com dados sensíveis
export class ClassPrivate {
  constructor(private name: string, private sobrenome: string) {}

  public getColaborador() {
    return `${this.name} ${this.sobrenome}`;
  }
}
const privateClass = new ClassPrivate('Eleomar', 'Dorneles');
//Posso vizualizar atravez do método public porém não posso alterar nenhuma informação da classe
console.log(privateClass.getColaborador());

/* Public */
//É acessado dentro da classe, fora da classe e por todas as subclasses;
export class ClassPublic {
  constructor(private name: string, public sobrenome: string) {}

  //Acessando uma propriedade privada com um método público
  public getName(): string {
    return this.name;
  }
}

const class1 = new ClassPublic('Eleomar', 'Dorneles');

//Posso acessar externamente qualquer propriedade ou método
console.log(class1.getName(), class1.sobrenome);
