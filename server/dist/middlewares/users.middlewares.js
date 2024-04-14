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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getSingleUser = exports.getAllUsers = void 0;
const users_1 = require("../models/users");
const main_1 = require("../functions/main");
const getAllUsers = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, users_1.getUsers)();
        res.json(users);
    }
    catch (e) {
        res.sendStatus(400).json(e);
    }
});
exports.getAllUsers = getAllUsers;
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = null;
        if (req.query.id) {
            try {
                user = (yield (0, users_1.getUserById)(req.query.id.toString()));
            }
            catch (_a) {
                res.sendStatus(500).json({ message: "Incorrect value" });
            }
        }
        else if (req.query.email) {
            user = (yield (0, users_1.getUserByEmail)(req.query.email.toString()));
        }
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ message: "User not found" });
        }
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500).json(e);
    }
});
exports.getSingleUser = getSingleUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user } = req.body;
        user.password = (0, main_1.sha256)(user.password);
        const addedUser = yield (0, users_1.addUser)(user);
        res.json(addedUser);
    }
    catch (e) {
        console.log(e.code);
        res.send(e);
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { username } = req.body;
        const user = yield (0, users_1.getUserById)(id);
        user.username = username;
        const updatedUser = yield (0, users_1.updateUserById)(id, user);
        res.json(updatedUser);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500).json(e);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedUser = yield (0, users_1.deleteUserById)(id);
        res.json(exports.deleteUser);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500).json(e);
    }
});
exports.deleteUser = deleteUser;
