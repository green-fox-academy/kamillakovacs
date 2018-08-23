import { Test } from 'tape'
import { Something } from './sum'

declare function require(path: string): any;
const test = require('tape');

let something1: Something = new Something;
let integerList2: any = null;

const actual = something1.sum(integerList2);
const expected = null;

test('testing sum of 12345', (test) => {
  test.equal(actual, expected);
  test.end();
});