import { Router } from 'express';

class ProductoRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res) => res.send('Se muestran los productos'));
    }
}

const productoRoutes = new ProductoRoutes();
export default productoRoutes.router;