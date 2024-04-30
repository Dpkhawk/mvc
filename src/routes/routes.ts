import express, { Router } from 'express';
import Product from '../controllers/controller';

const newProduct = new Product();
const route: Router = express.Router();

route.get('/users/:id?', newProduct.getAllUsers);
route.delete('/users/:id', newProduct.deleteUsers); // Uncomment if you have implemented the deleteUsers method
route.post('/users', newProduct.createUser);
route.put('/users/:id', newProduct.updateUser);
export default route;
