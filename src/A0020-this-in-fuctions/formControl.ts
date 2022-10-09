/* This in functions and arrow functions */
//Pegar o elemento target e passar ele como this

import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const formSubmit = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  console.log('ENVIANDO');

  hideErrorMesseges(target);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(target)) console.log('FORMULÁRIO ENVIADO');
};

form.addEventListener('submit', formSubmit);

const hideErrorMesseges = (form: HTMLFormElement): void => {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
};

const showErrorMessege = (input: HTMLInputElement, msg: string): void => {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessege = formFields.querySelector(
    '.error-message'
  ) as HTMLSpanElement;

  errorMessege.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
};

const checkForEmptyFields = (...inputs: Array<HTMLInputElement>): void => {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessege(input, 'Campo vazio');
  });
};

const checkEmail = (input: HTMLInputElement): void => {
  if (!isEmail(input.value)) showErrorMessege(input, 'Email inválido');
};

const checkEqualPasswords = (
  password: HTMLInputElement,
  password2: HTMLInputElement
): void => {
  if (password.value !== password2.value) {
    showErrorMessege(password, 'Senhas não batem');
    showErrorMessege(password2, 'Senhas não batem');
  }
};

const shouldSendForm = (form: HTMLFormElement): boolean => {
  let send = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((el) => (send = false));
  return send;
};

showErrorMessege(username, 'MENSAGEM');
hideErrorMesseges(form);
