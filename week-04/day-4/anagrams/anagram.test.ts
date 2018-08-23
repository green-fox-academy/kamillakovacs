


import { Test } from 'tape'
import { Anagrams } from './anagrams'

declare function require(path: string): any;
const test = require('tape');

'use strict'

let actual = Anagrams(`gorgo`, `gorog`);
let expected = true

test('anagram boolean test', (test) => {
	test.equal(actual, expected, 'does it return true');
	test.end();
});