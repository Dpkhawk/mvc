"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const cors_1 = __importDefault(require("cors"));
const db_connect_1 = __importDefault(require("../config/db-connect"));
const app = (0, express_1.default)();
(0, db_connect_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/', routes_1.default);
app.listen(2000, () => {
    console.log(`Server is running on port ${2000}`);
});
