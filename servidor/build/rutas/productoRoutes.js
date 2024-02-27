"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = __importDefault(require("../controller/productoController"));
class ProductoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productoController_1.default.lista);
        this.router.post('/', productoController_1.default.crear);
        this.router.put('/:id', productoController_1.default.actualiza);
        this.router.delete('/:id', productoController_1.default.eliminar);
        this.router.get('/:id', productoController_1.default.buscar);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
