'use strict';

module.exports = function hasDynamicImport() {
	try {
		require('./import'); // eslint-disable-line global-require
		return true;
	} catch (e) {
		return false;
	}
};
