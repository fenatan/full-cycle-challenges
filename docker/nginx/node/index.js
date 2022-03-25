const express = require('express');
const mysql = require('mysql');
const faker = require('@faker-js/faker/locale/pt_BR')
const PORT = 3000;

const app = express();

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const connection = mysql.createConnection(config);
const createTableSQL = `CREATE TABLE IF NOT EXISTS people(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`
connection.query(createTableSQL);

app.get('/', (req, res) => {
  const randomName = faker.name.findName(); 

  const createPeopleSQL = `INSERT INTO people(name) values ('${randomName}')`
  connection.query(createPeopleSQL);

  const getAllPeopleSQL = `SELECT name from people`;
  connection.query(getAllPeopleSQL, function (err, result) {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }

    const peopleNameList = `<ul>${result.map((people) => `<li>${people.name}</li>`).join('')}</ul>`;
    res.status(200).send('<h1>Full Cycle Rocks!</h1>' + peopleNameList);
  });
})

app.listen(PORT, () => {
  console.log('Sever start on port', PORT)
})