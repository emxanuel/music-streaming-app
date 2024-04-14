"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const users_middlewares_1 = require("../middlewares/users.middlewares");
const usersRouter = express_1.default.Router();
usersRouter.get('/', users_middlewares_1.getAllUsers);
usersRouter.post('/', users_middlewares_1.createUser);
usersRouter.get('/find', users_middlewares_1.getSingleUser);
usersRouter.put('/:id', users_middlewares_1.updateUser);
usersRouter.delete('/:id', users_middlewares_1.deleteUser);
module.exports = usersRouter;
