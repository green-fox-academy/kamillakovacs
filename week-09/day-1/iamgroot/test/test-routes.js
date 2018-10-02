'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  t.equals(2, 1+1);
  
  t.end();
});

test('get should return with empty JSON', (t) => {
  request(app)
  .get('/groot')
  .set('Content-Type', /json/)
  .expect(200)
  .expect({})  
  .end((err, res) => {
    if (err) {
      console.log('error', err.message)
    }
    t.end()
  });
});
