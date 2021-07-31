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
class UserController {
    find(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.id;
            if (!id)
                return res.status(404).json({});
            const user = yield UserRepository_1.default.findById(id);
            return res.status(200).json(user);
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req === null || req === void 0 ? void 0 : req.body;
            if (!name || !email || !password)
                return res.status(406)
                    .json({});
            const user = yield UserRepository_1.default.store(req === null || req === void 0 ? void 0 : req.body);
            return res.status(200).json(user);
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserRepository_1.default.findAll();
            return res.status(200).json(user);
        });
    }
}
exports.default = new UserController();
