import mysql from 'promise-mysql';
import data from './data';

const pool = mysql.createPool(data.database);

pool.getConnection() //conecta a la base de datos
.then((connection: any) => {
    pool.releaseConnection(connection);
    console.log('DB está conectada');
});

export default pool; //exporta el objeto