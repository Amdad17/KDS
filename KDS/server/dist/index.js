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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const orderRouter_1 = __importDefault(require("./routers/orderRouter"));
const employeePerformanceRouter_1 = __importDefault(require("./routers/employeePerformanceRouter"));
const ruleSetterRouter_1 = __importDefault(require("./routers/ruleSetterRouter"));
const ruleRouter_1 = __importDefault(require("./routers/ruleRouter"));
const router_rule_order_1 = __importDefault(require("./routers/router.rule.order"));
const PORT = process.env.port || 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/order', orderRouter_1.default);
app.use('/create-employee', employeePerformanceRouter_1.default);
app.use('/rule-setter', ruleSetterRouter_1.default);
app.use('/rules', ruleRouter_1.default);
app.use('/create', router_rule_order_1.default);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        {
            try {
                yield mongoose_1.default.connect("mongodb://127.0.0.1:27017/KDS");
                //await mongoose.connect("mongodb+srv://KDS_user:123456a@kds.gkxu3vj.mongodb.net/");
                console.log('db connected mongoose');
                app.listen(PORT, () => {
                    console.log('Server running on Port', PORT);
                });
            }
            catch (error) {
            }
        }
    });
}
main();
