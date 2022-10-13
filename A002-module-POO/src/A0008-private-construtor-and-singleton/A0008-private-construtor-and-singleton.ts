/* Private constructor and singleton */
//Ou a classe retorne a instancia que eu já tenho
//Ou crie uma instancia caso não exista nenhuma
//Usado para criar apenas uma instancia da classe, como o exemplo do banco de dados
//Geralmente não se quer mais que uma conexão com o banco

export class Database {
  private static database: Database; //É um atributo estático porém só pode ser acessado dentro da classe
  //Colocar a palavra private no constructor
  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
  //Factory method
  //Quando o método de uma classe cria um objeto
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const database = Database.getDatabase('localhost', 'root', 'root');
database.connect();

const database2 = Database.getDatabase('localhost', 'root', 'root');
database.connect();

console.log(database === database2);
