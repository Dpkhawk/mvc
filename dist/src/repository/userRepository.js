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
const models_1 = __importDefault(require("../models/models"));
class UserRepository {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield models_1.default.find();
            return result;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield models_1.default.findById(id);
            return result;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield models_1.default.findByIdAndDelete(id);
            return result;
        });
    }
    createuser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('hi');
            const result = yield models_1.default.create(data);
            return result;
        });
    }
    updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield models_1.default.findByIdAndUpdate(id, data);
            return result;
        });
    }
    checkUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield models_1.default.findOne({ email: email });
            return result;
        });
    }
}
exports.default = new UserRepository();
