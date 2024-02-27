import { Request, Response } from "express";

import pool from '../database';

class ProductoController {
  public async lista(req: Request, res: Response){
    const productos = await pool.query('SELECT * FROM productos');
    res.json(productos);
  }

  public async crear(req: Request, res: Response){
    //console.log(req.body); //muestra en consola el cuerpo de la petición
    await pool.query('INSERT INTO productos set ?', [req.body]);
    res.json({ message: 'Se guardó un producto' });
  }

  public async actualiza(req: Request, res: Response){
    const { id } = req.params;
    await pool.query('UPDATE productos set ? WHERE id = ?', [req.body, id]);
    res.json({ message: 'Se actualizó un producto' });
  }

  public async eliminar(req: Request, res: Response){
    const { id } = req.params;
    await pool.query('DELETE FROM productos WHERE id = ?', [id]);
    res.json({ message: 'Se eliminó un producto' });  
  }

  public async buscar(req: Request, res: Response){
    const { id } = req.params;
    const producto = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
    if(producto.length > 0) res.json(producto);
    else res.status(404).json({ message: 'El producto no existe' });
  }
}

const productoController = new ProductoController();//devuelve un objeto 
export default productoController;//exporta el objeto