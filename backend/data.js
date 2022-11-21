import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'LEONOVO Y45',
      slug: 'LENOVO Y45',
      category: 'COMPUTADORAS',
      image: '/images/Y545.jpg',
      price: 12000,
      countInStock: 0,
      brand: 'LAPTOP',
      rating: 4.0,
      numReviews: 10,
      description: 'producto de alta calidad',
    },
    {
      // _id: '3',
      name: 'IPHONE 14 PRO MAX',
      slug: 'IPHONE 14 PRO MAX',
      category: 'SMARTPHONE',
      image: '/images/IPHONE.jpg',
      price: 14000,
      countInStock: 15,
      brand: 'MAC',
      rating: 4.5,
      numReviews: 14,
      description: 'producto de alta calidad',
    },
    {
      // _id: '4',
      name: 'CANON T100',
      slug: 'CANON T100',
      category: 'Pants',
      image: '/images/T100.jpg',
      price: 3500,
      countInStock: 5,
      brand: 'CANON',
      rating: 4.5,
      numReviews: 10,
      description: 'producto de alta calidad',
    },
  ],
};
export default data;
