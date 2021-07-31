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
const UserRepository_1 = __importDefault(require("../database/repository/UserRepository"));
const security_1 = require("../utils/security");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.SECRET;
const auth = {
    preAuth(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req === null || req === void 0 ? void 0 : req.body;
            if (!email || !password)
                return res.json({});
            const user = yield UserRepository_1.default.findByColumn({ email });
            const bindPassword = security_1.bcryptCompare(password, user[0].password);
            if (!bindPassword)
                return res.status(401).json({});
            delete user[0].password;
            return res.status(200).json({
                token: jsonwebtoken_1.default.sign({
                    data: user
                }, secret, { expiresIn: '1h' })
            });
        });
    },
    tokenValidate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.body.token;
                const isValid = jsonwebtoken_1.default.verify(token, secret);
                if (isValid)
                    return next();
            }
            catch (err) {
                return res.status(401).json({});
            }
        });
    }
};
exports.default = auth;
