/* --------------------
 * @overlookmotel/eslint-config module
 * ------------------*/

'use strict';

// Exports
module.exports = {
	env: {
		node: true,
		es6: true
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	extends: [
		'eslint:recommended',
		'plugin:eslint-comments/recommended'
	],
	rules: {
		// Basic rules
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],

		// Enable all "Possible Errors" rules not already enabled in `eslint:recommended`
		// https://eslint.org/docs/rules/#possible-errors
		'no-async-promise-executor': ['error'],
		'no-extra-parens': ['error'],
		'no-misleading-character-class': ['error'],
		'no-prototype-builtins': ['error'],
		'no-template-curly-in-string': ['error'],
		'require-atomic-updates': ['error'],
		'valid-jsdoc': ['error'],

		// Various other rules
		'eqeqeq': ['error', 'always', {null: 'ignore'}],
		'no-use-before-define': ['error', {functions: false}],
		'no-unused-expressions': ['error'],
		'no-var': ['error'],
		'no-loop-func': ['error'],
		'no-useless-call': ['error'],
		'no-eval': ['error'],
		'no-shadow-restricted-names': ['error'],
		'space-before-function-paren': ['error', {anonymous: 'never', named: 'never', asyncArrow: 'always'}],
		'keyword-spacing': ['error'],
		'max-len': ['error', {
			code: 105,
			tabWidth: 4,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true,
			ignoreUrls: true
		}],

		// eslint-comments rules
		'eslint-comments/no-unused-disable': ['error'],
		'eslint-comments/disable-enable-pair': ['error', {allowWholeFile: true}]
	}
};
