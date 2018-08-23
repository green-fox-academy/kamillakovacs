import { Test } from 'tape'
declare function require(path: string): any;
const test = require('tape');

'use strict'

test('one should equal one', (test) => {
	test.equal(1, 1, 'should be equal');
	test.end();
});


