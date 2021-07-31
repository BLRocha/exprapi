"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bcryptCompare = exports.gemBcryptHmac = exports.plainTextHmacCompare = exports.gemHmac = void 0;
const crypto_1 = require("crypto");
const bcryptjs_1 = require("bcryptjs");
const secret = process.env.SECRET;
const gemHmac = (plainPassText, alg) => {
    return crypto_1.createHmac(alg || 'sha256', secret).update(plainPassText).digest('hex');
};
exports.gemHmac = gemHmac;
const plainTextHmacCompare = (plainPassword, hmac) => {
    return exports.gemHmac(plainPassword) === hmac;
};
exports.plainTextHmacCompare = plainTextHmacCompare;
const gemBcryptHmac = (hmac, salt) => {
    return bcryptjs_1.hashSync(hmac, salt);
};
exports.gemBcryptHmac = gemBcryptHmac;
const bcryptCompare = (plainPassword, hashBcypt) => {
    return bcryptjs_1.compareSync(exports.gemHmac(plainPassword), hashBcypt);
};
exports.bcryptCompare = bcryptCompare;
