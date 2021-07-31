"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./middlewares/auth"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const route = express_1.Router();
route.get('/', (req, res) => {
    return res.json({
        'api': process.versions
    });
});
route.post('/login', auth_1.default.preAuth);
route.get('/user', UserController_1.default.find);
route.post('/user', UserController_1.default.store);
route.get('/users', auth_1.default.tokenValidate, UserController_1.default.findAll);
route.use((req, res) => {
    const path = (req === null || req === void 0 ? void 0 : req.url) || '?';
    return res.json({
        'uri_path': `${path} not found :(`
    });
});
exports.default = route;
