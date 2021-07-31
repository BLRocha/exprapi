"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
try {
    typeorm_1.createConnection().then(() => {
        console.log("db connected...");
    }).catch(err => {
        console.error(err);
    });
}
catch (err) {
    console.error(err);
}
