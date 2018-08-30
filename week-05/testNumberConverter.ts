import { Test } from 'tape';
import { main } from './numbertoconvert'

declare function require(path: string): any;
const test = require('tape');

'use strict'

/*
let actual = numberConverter(1);

let expected = `one`;
test('number turns into string', (test) => {
	test.equal(numberConverter(1), `one`, 'not working');
	test.end();
});
*/

test('number turns into string', (test) => {
	test.equal(main(65433212), `two`, 'not working');
	test.end();
});