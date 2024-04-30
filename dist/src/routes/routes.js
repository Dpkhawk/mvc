"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../controllers/controller"));
const newProduct = new controller_1.default();
const route = express_1.default.Router();
route.get('/users/:id?', newProduct.getAllUsers);
route.delete('/users/:id', newProduct.deleteUsers); // Uncomment if you have implemented the deleteUsers method
route.post('/users', newProduct.createUser);
route.put('/users/:id', newProduct.updateUser);
exports.default = route;
