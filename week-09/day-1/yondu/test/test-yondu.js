'use strict';

const test = require('tape');
const request = require('supertest');
const yondu = require('../yondu');

test('yondu endpoint', (t) => {
  request(yondu.app)
    .get('/yondu')
    .expect('Content-Type', /json/)
    .expect(400)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      }
      t.deepEquals(res.body, { error: "Yondu" });
    });
  t.end();
});

test('yondu endpoint', (t) => {
  let message = 'Hello there general Yondu';
  request(yondu.app)
    .get('/yondu=' + message)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      }
      t.deepEquals(res.body, { received: message, translated: "I am Yondu" });
    });
  t.end();
});