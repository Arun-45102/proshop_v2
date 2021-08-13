import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@bb.com',
    password: bcrypt.hashSync('admin123', 10),
    isAdmin: true,
  },
  {
    name: 'Apple',
    email: 'apple@bb.com',
    password: bcrypt.hashSync('apple123', 10),
    isSeller: true,
  },
  {
    name: 'Arun Kumar',
    email: 'arun@bb.com',
    password: bcrypt.hashSync('arun123', 10),
  },
  {
    name: 'Dinesh',
    email: 'dinesh@bb.com',
    password: bcrypt.hashSync('dinesh123', 10),
  },
];

export default users;
