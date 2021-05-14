'use strict';

var supported = false;
try {
	Function('import("").catch(() => {})');
	supported = true;
} catch (e) { /**/ }a

module.exports = supported;
