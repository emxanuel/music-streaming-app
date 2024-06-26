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
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const users_1 = require("../models/users");
const main_1 = require("../functions/main");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        if (data.username) {
            const user = yield (0, users_1.verifyUser)((0, main_1.sha256)(data.password), data.username, undefined);
            if (user) {
                res.send(user._id);
            }
            else {
                res.send('user not found');
            }
        }
        if (data.email) {
            const user = yield (0, users_1.verifyUser)((0, main_1.sha256)(data.password), undefined, data.email);
            if (user) {
                res.send(user._id);
            }
            else {
                res.send('user not found');
            }
        }
    }
    catch (e) {
        console.log(e);
    }
});
exports.login = login;
