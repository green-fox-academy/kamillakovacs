const mysql = require('mysql');

const conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'HowNice',
  database: `bookstore`,
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

conn.query(`SHOW TABLES;`, (err, result) => {
  console.log(result);
});

const insertAuthor = (author) => {
  conn.query(`INSERT INTO author(aut_name) values('${author}')`, (err,result) => {
    if (err) {
      console.log('Error', err.message);
      return;
    }
    console.log(result);
    return result;
  });
}


insertAuthor(`petofi`);
insertAuthor(`ironeni`);


const getAuthor = () => {
  conn.query(`SELECT * FROM bookstore`, (err,result) => {
    if (err) {
      console.log('Error', err.message);
      return;
    }
    console.log(result);
    return result;
  });
}

getAuthor();


const filterAuthorContainsThisLetter = (letter) => {
  conn.query(`SELECT * FROM bookstore WHERE author LIKE '%${author}%'`, (err,result) => {
    if (err) {
      console.log('Error', err.message);
      return;
    }
    console.log(result);
    return result;
  });
}

const releaseAuthor = (valami) => {
  conn.query(`DELETE from bookstore WHERE author LIKE '%${valami}%'`, (err, result) => {
    if( err ) {
      console.log(err.message);
      return;
    }
    console.log(result);
  });
}


conn.end();