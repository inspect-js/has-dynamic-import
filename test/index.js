'use strict';

var test = require('tape');
var semver = require('semver');
var hasDynamicImport = require('../');

test('hasDynamicImport', function (t) {
	t.equal(typeof hasDynamicImport, 'function', 'is a function');

	var yes = hasDynamicImport();
	t.equal(typeof yes, 'boolean', 'returns a boolean');

	t.test('browser', { todo: true, skip: typeof window === 'undefined' }, function (st) {
		st.end();
	});

	t.test('node', { skip: typeof global === 'undefined' }, function (st) {
		st.equal(
			yes,
			semver.satisfies(process.version, '>= 10'),
			'result matches expected node version range'
		);
		st.end();
	});

	t.end();
});
