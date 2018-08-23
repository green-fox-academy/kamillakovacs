import { Test } from 'tape'
import { Something } from './sum'

declare function require(path: string): any;
const test = require('tape');

let something1: Something = new Something;
let integerList: number[] = [1, 2, 3, 4, 5];

const actual = something1.sum(integerList);
const expected = 15;

test('testing sum of 12345', (test) => {
  test.equal(actual, expected);
  test.end();
});