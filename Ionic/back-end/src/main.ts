import 'dotenv/config';
import mysql from 'mysql';
import app from './api/app';

console.log("Starting Main");

const PORT = process.env.EXPRESS_PORT ?? 5001;

try {
  app.listen(PORT, () => {
    console.log(`  -> [ℹ️] Server is running on localhost:${PORT}`);
  });
  
  app.get('/', function(req, res)
  {
    res.send("Server is working");
  });
} catch (error) {
  console.log('[❌] There was an error when starting the server: ', error);
}

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'carlos_db'
});

try
{
  connection.connect();
}
catch (error)
{
  console.log("Could not connect to database.");
}

console.log("Connected to database.");

export function StartQuery(query: string): Promise<any>
{
  return new Promise((resolve, reject) => {
    try {
      connection.query(query, function (error, results, fields) {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    } catch (error) {
      reject("There was an error trying the query");
    }
  });
}

export async function IsEmailRegistered(email: string): Promise<boolean>
{
  try {
    const results = await StartQuery("SELECT COUNT(*) AS count FROM user WHERE email = '" + email + "';");
    console.log('Result: ', results);
    return results[0].count > 0; // Assuming results is an array and count is a field in the first object
  } catch (error) {
    console.error(error);
    return false;
  }
}