'use strict';

const fs = require('fs');

module.exports = import('fs').then(
	(x) => Object.entries(fs).every(([k, v]) => x[k] === v),
	() => {}
);
