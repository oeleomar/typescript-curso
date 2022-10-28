//Record
const obj1: Record<string, string | number> = {
  //Dizer o tipo da chave e valor de um objeto
  nome: 'Eleomar',
  sobrenome: 'Dorneles',
  idade: 22,
};

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

const obj2: PessoaProtocol = {
  //Dizer o tipo da chave e valor de um objeto
  nome: 'Eleomar',
  sobrenome: 'Dorneles',
  idade: 22,
};

//Required
//Transforma tudo para required
type PessoaRequired = Required<PessoaProtocol>;

//Partial
//Transforma todas as chaves em opcional
type PessoaPartial = Partial<PessoaProtocol>;

//Readonly
//Transforma tudo em Readonly
type PessoaReadonly = Readonly<PessoaProtocol>;

//Pick
//Pega as chaves que eu quero através de union types
type PessoaPick = Pick<PessoaProtocol, 'nome' | 'sobrenome'>;

//Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
//Computa todos os tipos que estão em ABC e que não estão em CDE
type TipoExclude = Exclude<ABC, CDE>;
//Computa os tipos que se repete entre ABC e CDE
type TipoExtract = Extract<ABC, CDE>;
console.log(obj1, obj2);

//Ex prático
type AccountMongo = {
  _id: string;
  name: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accMong: AccountMongo = {
  _id: 'sdgvszdfhsfjh',
  name: 'Eleomar',
  idade: 20,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accData } = accountMongo;
  return { ...accData, id: _id };
}

export default 1;
