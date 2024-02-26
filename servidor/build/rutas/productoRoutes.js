"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ProductoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Se muestran los productos'));
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
