/* --------------------
 * `@overlookmotel/eslint-config` module
 * ESLint tests config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	extends: [
		'@overlookmotel/eslint-config-jest'
	],
	rules: {
		'import/no-unresolved': ['error', {ignore: ['^@overlookmotel/eslint-config$']}],
		'node/no-missing-require': ['error', {allowModules: ['@overlookmotel/eslint-config']}]
	}
};
