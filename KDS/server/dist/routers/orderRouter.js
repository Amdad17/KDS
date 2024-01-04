"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Order_Controller_1 = require("../controllers/Order.Controller");
const router = express_1.default.Router();
router.get('/orders', Order_Controller_1.getAllOrders);
router.post('/create', Order_Controller_1.createOrder);
exports.default = router;
