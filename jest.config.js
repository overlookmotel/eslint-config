/* --------------------
 * `@overlookmotel/eslint-config` module
 * Jest config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	testEnvironment: 'node',
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['index.js', 'lib/**/*.js'],
	setupFilesAfterEnv: ['jest-extended/all'],
	moduleNameMapper: {
		'^@overlookmotel/eslint-config$': '<rootDir>/index.js'
	}
};
