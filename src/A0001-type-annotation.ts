/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
/* eslint-disabled */

/* Tipos básicos */
let nome: string = 'Eleomar'; //Qualquer typo de string
let idade: number = 30; //Qualquer número, 10, 1.57, -5.55, 0xf00d, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); //Symbol
//let big: bigint = 10n; // Bigint

/* Passados por referência */
let arrayStrings: Array<string> = ['Eleomar', 'Dorneles']; //Array<tipo>, não aceita outros tipos
let arrayStrings2: string[] = ['Eleomar', 'Dorneles']; //tipo[], não aceita outros tipos

//Objetos
// ? deixa opcional
let pessoa: { nome: string; idade: number; adult?: boolean } = {
  nome: 'Eleomar',
  idade: 22,
  adult: true,
};

//Funções
function soma(x: number, y: number): number {
  return x + y; //Infere que o retorno já é um number
}
const result = soma(1, 1);

//Arrow function
const soma2: (x: number, y: number) => number = (x, y) => x + y; //Definindo o tipo do retorno
