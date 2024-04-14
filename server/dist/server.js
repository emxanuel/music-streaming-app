"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const db_service_1 = __importDefault(require("./services/db-service"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 80;
const site = process.env.SITE || '';
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', site);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/', routes_1.default);
app.use((0, cors_1.default)());
(0, db_service_1.default)();
const httpServer = http_1.default.createServer(app);
httpServer.listen(port, () => {
    console.log(`app listening in port: ${port}`);
});
