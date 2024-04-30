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
const userRepository_1 = __importDefault(require("../repository/userRepository"));
class UserServices {
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield userRepository_1.default.getAllUsers();
            return result;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield userRepository_1.default.getUserById(id);
            return result;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield userRepository_1.default.deleteUser(id);
            return result;
        });
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result1 = yield userRepository_1.default.checkUser(data.email);
            if (result1) {
                return 'User Already Existed';
            }
            else {
                const result = yield userRepository_1.default.createuser(data);
                return result;
            }
        });
    }
    updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield userRepository_1.default.updateUser(id, data);
            if (result) {
                return result;
            }
            return;
        });
    }
}
exports.default = new UserServices();
