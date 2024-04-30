"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userServices_1 = __importDefault(require("../services/userServices"));
class Products {
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.params.id) {
                    const result = yield userServices_1.default.getUserById(req.params.id);
                    if (result) {
                        res.send(result);
                    }
                    else {
                        res.status(404).send('User Not Found');
                    }
                }
                else {
                    const result = yield userServices_1.default.getAllUser();
                    if (result) {
                        res.send(result);
                    }
                    else {
                        res.status(404).send('User Not Found');
                    }
                }
            }
            catch (error) {
                res.status(500).send('Internal Server Error');
            }
        });
    }
    deleteUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield userServices_1.default.deleteUser(req.params.id);
                if (result) {
                    res.send('Deleted Successfully');
                }
                else {
                    res.status(404).send('User not found');
                }
            }
            catch (error) {
                res.status(500).send('Internal Server Error');
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield userServices_1.default.createUser(req.body);
                if (result === 'User Already Existed') {
                    res.status(409).send(result);
                }
                else {
                    res.status(201).send('Created Successfully');
                }
            }
            catch (error) {
                res.status(500).send('Internal Server Error');
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield userServices_1.default.updateUser(req.params.id, req.body);
                console.log(result, 'hi');
                if (result) {
                    res.status(201).send('Updated Successfully');
                }
                else {
                    res.status(404).send('User Not Found');
                }
            }
            catch (error) {
                res.status(500).send('Internal Server Error');
            }
        });
    }
}
exports.default = Products;
