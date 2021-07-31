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
const typeorm_1 = require("typeorm");
const Users_1 = __importDefault(require("../models/Users"));
class UserRepository {
    store(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = typeorm_1.getRepository(Users_1.default);
            const user = yield repository.create(body);
            yield repository.save(user);
            return user;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = typeorm_1.getRepository(Users_1.default);
            const user = yield repository.findOne({ where: { id: id || 0 } });
            return user;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = typeorm_1.getRepository(Users_1.default);
            const users = yield repository.find();
            users.map(value => delete value.password);
            return users;
        });
    }
    ;
    findByColumn(column) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = typeorm_1.getRepository(Users_1.default);
            const users = yield repository.find({ where: Object.assign({}, column) });
            return users;
        });
    }
}
exports.default = new UserRepository();
