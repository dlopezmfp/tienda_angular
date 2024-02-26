import express, {Application } from 'express';

import indexRoutes from './rutas/indexRoutes';
class Server{
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.rutas();
    }
    
    config(): void{
        
        this.app.set('port', process.env.PORT || 3000);
    }

    rutas(): void{
        this.app.use(indexRoutes);

        
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el puerto', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();