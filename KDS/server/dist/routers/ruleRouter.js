"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ruleController_1 = require("../controllers/ruleController");
const rulerouter = express_1.default.Router();
rulerouter.post('/create', ruleController_1.createRule);
rulerouter.get('/get', ruleController_1.getRules);
exports.default = rulerouter;
