import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Hamed Jafari',
    email: 'hamedjix@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mohammad Kasiri',
    email: 'mohammadK@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mohammadreza Tahmasebi',
    email: 'mohammadT@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
