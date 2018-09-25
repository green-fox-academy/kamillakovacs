'use strict'

const source = require('./poker-checker')
const tape = require('tape');

tape.test('testing test', t => {
  const result = 2;
  t.equals(result, source.addTwoNumbers(1, 1));
  t.end();
});
