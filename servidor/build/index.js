"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./rutas/indexRoutes"));
const productoRoutes_1 = __importDefault(require("./rutas/productoRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.rutas();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev')); //  para ver las peticiones que llegan al servidor
        this.app.use((0, cors_1.default)()); //para que angular pueda comunicarse con el servidor
        this.app.use(express_1.default.json()); //para recibir datos en formato json
        this.app.use(express_1.default.urlencoded({ extended: false })); //para recibir datos de formularios
    }
    rutas() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/productos', productoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
