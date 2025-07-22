require('dotenv').config();
const mysql = require('mysql2');
const express = require('express');
const app = express();
const db = mysql.createConnection({
  host: process.env.DB_HOST,      
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, result) => {
        if(err){
            res.status(500).json({message: 'Error occurred while retreving products', error: err });
        }
        else{
            res.status(200).json(result);
        }
    });
});

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const sql = 'SELECT * FROM products WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if(err){
            res.status(500).json({message: 'Error occurred while retreving products', error: err });
        }
        else{
            if(result.length === 0){
                res.status(404).json({message: 'products not found', data: result})
            }
            else{
                res.status(200).json({data: result});
            }
        }
    });
});

app.get('/products/search/:keyword', (req, res) => {
    const keyword = req.params.keyword;
    const sql = 'SELECT * FROM products WHERE name LIKE ?';
    db.query(sql, [`%${keyword}%`], (err, result) => {
        if(err){
            res.status(500).json({message: 'Error occurred while retreving products', error: err });
        }
        else{
            res.status(200).json(result);
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));