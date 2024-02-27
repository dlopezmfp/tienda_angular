import { Router } from 'express';

import productoController from "../controller/productoController";

class ProductoRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', productoController.lista);
        this.router.post('/', productoController.crear);
        this.router.put('/:id', productoController.actualiza);
        this.router.delete('/:id', productoController.eliminar); 
        this.router.get('/:id', productoController.buscar); 
    }
}

const productoRoutes = new ProductoRoutes();
export default productoRoutes.router;