'use strict';

var test = require('tape');
var semver = require('semver');
var isBrowser = typeof window !== 'undefined';
var isNode = !isBrowser && typeof process !== 'undefined';

var hasDynamicImport = require('../');
var hasSyntax = require('../syntax');

var browserHasSyntax = require('../browser-syntax');

test('hasDynamicImport', function (t) {
	t.equal(typeof hasDynamicImport, 'function', 'is a function');

	var yes = hasDynamicImport();
	t.equal(typeof yes, 'boolean', 'returns a boolean');

	t.test('browser', { todo: true, skip: !isBrowser }, function (st) {
		st.end();
	});

	t.end();
});

test('hasSyntax', function (t) {
	t.equal(typeof hasSyntax, 'function', 'is a function');

	t.test('node', { skip: !isNode }, function (st) {
		var result = hasSyntax();

		st.equal(typeof result, 'boolean', 'returns a boolean');
		st.equal(
			result,
			semver.satisfies(process.version, '>=10'),
			'result matches expected node version range'
		);

		st.end();
	});

	t.test('browser', function (st) {
		var result = browserHasSyntax();

		st.equal(typeof result, 'boolean', 'returns a boolean');
		st.equal(
			result,
			hasSyntax(),
			'matches result from node implementation'
		);

		st.end();
	});
});
