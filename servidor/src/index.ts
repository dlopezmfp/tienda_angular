import express, {Application } from 'express';

import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './rutas/indexRoutes';
import productoRoutes from './rutas/productoRoutes';
class Server{
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.rutas();
    }
    
    config(): void{
        
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));//  para ver las peticiones que llegan al servidor
        this.app.use(cors());//para que angular pueda comunicarse con el servidor
        this.app.use(express.json());//para recibir datos en formato json
        this.app.use(express.urlencoded({extended: false}));//para recibir datos de formularios
    }

    rutas(): void{
        this.app.use(indexRoutes);
        this.app.use('/api/productos', productoRoutes);

        
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el puerto', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();