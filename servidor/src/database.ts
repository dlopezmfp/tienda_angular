import mysql, { Pool } from 'promise-mysql';
import data from './data';

const pool = (mysql.createPool(data.database) as unknown) as Pool;

pool.getConnection()
.then((connection: any) => {
    connection.release();
    console.log('DB is connected');
});

export default pool;