import 'dotenv/config';
import app from './api/app';
/*

import AppDataSource from './data';

const PORT = process.env.EXPRESS_PORT ?? 3000;

// Cosas del ayudante
AppDataSource.initialize()
  .then(async () => {
    console.log('[✅] TypeORM fue cargado exitosamente!');
    try {
      app.listen(PORT, () => {
        console.log(`  -> [ℹ️ ] Server is running on port ${PORT}`);
      });
    } catch (error) {
      console.log('[❌] Error al iniciar el servidor: ', error);
    }
  })
  .catch((error) => {
    console.log('[❌] Error al cargar TypeORM: ', error);
  });
*/

// mysql
import express, { json } from 'express';
import mysql from 'mysql';

//import dbops from './src/dbops';

const PORT = 5001;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'carlos_db'
});

connection.connect();

connection.query('SELECT * FROM user', function (error, results, fields) {
  if (error) throw error;
  console.log('Result: ', results[0].name);
});

const appMySql = express();

appMySql.use(json());
// ALSO ADD THE use routes
//appMySql.use(dbops);

appMySql.listen(PORT, function() {
  console.log("Server running on localhost:"+PORT);
})

appMySql.get('/', function(req, res)
{
  res.send("Server is working");
})