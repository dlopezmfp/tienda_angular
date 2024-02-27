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
const database_1 = __importDefault(require("../database"));
class ProductoController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield database_1.default.query('SELECT * FROM productos');
            res.json(productos);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); //muestra en consola el cuerpo de la petición
            yield database_1.default.query('INSERT INTO productos set ?', [req.body]);
            res.json({ message: 'Se guardó un producto' });
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE productos set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Se actualizó un producto' });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM productos WHERE id = ?', [id]);
            res.json({ message: 'Se eliminó un producto' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const producto = yield database_1.default.query('SELECT * FROM productos WHERE id = ?', [id]);
            if (producto.length > 0)
                res.json(producto);
            else
                res.status(404).json({ message: 'El producto no existe' });
        });
    }
}
const productoController = new ProductoController(); //devuelve un objeto 
exports.default = productoController; //exporta el objeto
