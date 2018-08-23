import { Test } from 'tape'
import { Sharpie } from '../../week-03/day-3/sharpie'

declare function require(path: string): any;
const test = require('tape');

'use strict'

let red: Sharpie = new Sharpie(`red`, 50);
let blue: Sharpie = new Sharpie(`blue`, 20);
let green: Sharpie = new Sharpie(`green`, 30);

let actual = red.getInkAmount();
let expected = 100;

test('get ink amount', (test) => {
	test.equal(actual, expected);
	test.end();
});