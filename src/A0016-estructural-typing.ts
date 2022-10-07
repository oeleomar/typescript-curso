/* Estructural typing */
//Ignorando identidades
//Ignora outras chaves que não tem no tipo

type VerifyUserFn = (user: User, sentValues: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = {
  username: 'Joao',
  password: '123456',
};

const sendUser = {
  username: 'Joao',
  password: '123456',
};

const loggedIn = verifyUser(bdUser, sendUser);
console.log(loggedIn ? 'Usuário logado' : 'Acesso negado');
