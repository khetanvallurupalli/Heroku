const { Client }  = require('pg');
const client = new Client({
  connectionString:  "postgres://eazwukoicfoaif:5bdd452dbdf855a81f77d1c225300421e22c6ea9d87adc73c2deae759308b52d@ec2-54-225-242-183.compute-1.amazonaws.com:5432/d2rkbvpbbgm7mu",
  ssl: true,
});

client.connect();
client.query('SELECT *  FROM hellotable;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

