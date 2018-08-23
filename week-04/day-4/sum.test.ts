import { Test } from 'tape'
import { Something } from './sum'

declare function require(path: string): any;
const test = require('tape');

const actual = something1.sum();
const expected = 15;

test('testing sum of 12345', (test) => {
  test.equal(actual, expected);
  test.end();
});