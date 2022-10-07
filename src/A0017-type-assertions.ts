/* Type assertions */

/* Recomendado */
//Trabalhando com a DOM
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red'; //Objeto pode ser nulo

//Type Assertion (as)
const body3 = document.querySelector('body') as HTMLBodyElement; //Só se tiver total certeza
if (body3) body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não recomendado */
const body4 = document.querySelector('body') as unknown as number;
//Non-null assertion (!)

const body2 = document.querySelector('body')!; //Falando que não pode ser nulo com o " ! "
if (body2) body2.style.background = 'red';
