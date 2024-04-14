"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sha256 = void 0;
const crypto_1 = __importDefault(require("crypto"));
function sha256(value) {
    const hash = crypto_1.default.createHash('sha256');
    hash.update(value);
    return hash.digest('hex');
}
exports.sha256 = sha256;
