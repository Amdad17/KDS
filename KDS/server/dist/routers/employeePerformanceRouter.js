"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeePerformance_Controller_1 = require("../controllers/employeePerformance.Controller");
const employeePermanceRouter = express_1.default.Router();
employeePermanceRouter.get('/employee', employeePerformance_Controller_1.getAllEmployee);
employeePermanceRouter.post('/create', employeePerformance_Controller_1.createEmployee);
exports.default = employeePermanceRouter;
