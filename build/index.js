"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./dbconn");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const routes_1 = __importDefault(require("./routes"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
const server = http_1.default.createServer(app);
server.listen(process.env.PORT || 3000);
server.on('listening', () => console.log('Server on.'));
