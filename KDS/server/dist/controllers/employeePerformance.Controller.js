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
exports.createEmployee = exports.getAllEmployee = void 0;
const employeeperformance_model_1 = require("../model/employeeperformance.model");
const getAllEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield employeeperformance_model_1.EmployeePerformanceModel.find();
        res.json(employee);
        res.status(202);
    }
    catch (error) {
        console.error(error);
        res.status(502).json({ message: 'Error Fetching employeeperformance' });
    }
});
exports.getAllEmployee = getAllEmployee;
const createEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEmployeePerformance = req.body;
        const createEmployeePerformance = yield employeeperformance_model_1.EmployeePerformanceModel.create(newEmployeePerformance);
        res.status(201).json(createEmployeePerformance);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error creating  employeeperformance' });
    }
});
exports.createEmployee = createEmployee;
