/* Encadeamento Opcional e Operador de Coalescência Nula */

//Encadeamento Opcional
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Um titulo',
  texto: 'O texto',
  //data: new Date(),
};

console.log(documento.data?.toDateString()); //Encadeamento Opcional
//Retorn null

//Operador de Coalescência Nula
//Olha se existe não valor undefined || null
console.log(documento.data?.toDateString() ?? 'Ixi não existe data'); // Como se fosse um IF() para caso exista algo
