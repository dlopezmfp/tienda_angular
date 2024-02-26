import { Router } from 'express';

class IndexRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res) => res.send('Bienvenido al servidor de NodeJS'));
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;