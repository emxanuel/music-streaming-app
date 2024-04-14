"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const authRoutes = (0, express_1.Router)();
authRoutes.post('/login', auth_middlewares_1.login);
exports.default = authRoutes;
