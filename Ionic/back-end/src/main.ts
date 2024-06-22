import 'dotenv/config';
import app from './api/app';

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


// mysql
var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
var mysql = require('mysql');

const dbops = require('./src/dbops');

const PortMySql = 3306;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql',
  database : 'carlos_db'
});

connection.connect();

const appMySql = express();

appMySql.use(bodyParser.json());
appMySql.use(cors());
appMySql.use(dbops)

appMySql.listen(PortMySql, function() {
  console.log("Server running on localhost:"+PortMySql);
})

appMySql.get('/', function(req, res)
{
  res.send("Server is working");
})