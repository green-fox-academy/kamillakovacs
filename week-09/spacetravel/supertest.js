const request = require('supertest');
const app = require('./server');
const test = require('tape');

test('thistest', t => {
  request(app.app)
    .get('/planets')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      }
      t.deepEquals(res.body.result[1].name, 'Mars' )
      console.log(res.body)
      app.conn.end()
      app.listen.close()
    });
  t.end();
})


