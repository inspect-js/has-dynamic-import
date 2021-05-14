'use strict';

var supported = false;
try {
	Function('import("").catch(() => {})'); // eslint-disable-line no-new-func
	supported = true;
} catch (e) { /**/ }

module.exports = supported;
