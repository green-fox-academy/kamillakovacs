import { Test } from 'tape'
import { Apple } from './apple'

declare function require(path: string): any;
const test = require('tape');

const actual = Apple.getApple();
const expected = 'apple';

test('checks for apple', (test) => {
	test.equal(actual, expected);
	test.end();
});