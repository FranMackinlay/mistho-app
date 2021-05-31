import bcrypt from 'bcryptjs';

let users = [
  {
    id: '12345678',
    name: 'Francisco',
    email: 'franmackinlay@gmail.com',
    password: bcrypt.hashSync('1234', 8),
  },
];

export function createUser(newUser) {
  const userExists = users.find(user => user.id === newUser.id);

  if (!userExists) {
    users.push(newUser);
  }

  return newUser;
}

export function findUser(email) {
  const user = users.find(user => user.email === email);

  return user;
}



export default users;
