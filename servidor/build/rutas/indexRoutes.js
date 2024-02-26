"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controlller/indexController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index); //ruta inicial del indexController
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
