/* --------------------
 * @overlookmotel/eslint-config module
 * ------------------*/

'use strict';

// Exports
module.exports = {
	env: {
		node: true
	},
	parserOptions: {
		sourceType: 'script'
	},
	extends: [
		'airbnb-base',
		'plugin:eslint-comments/recommended'
	],
	rules: {
		// Alterations of airbnb rules
		'max-len': ['error', {
			code: 105,
			tabWidth: 4,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true,
			ignoreUrls: true
		}],
		indent: ['error', 'tab'],
		'no-tabs': ['error', {allowIndentationTabs: true}],
		'comma-dangle': ['error', 'never'],
		'object-curly-spacing': ['error', 'never'],
		'one-var': ['off'],
		'no-plusplus': ['off'],
		'no-restricted-syntax': ['off'],
		'no-param-reassign': ['off'],
		'no-use-before-define': ['error', {functions: false}],
		'object-curly-newline': ['error', {multiline: true, consistent: true}],
		'one-var-declaration-per-line': ['error', 'initializations'],
		'prefer-destructuring': ['error',
			{
				VariableDeclarator: {array: false, object: true},
				AssignmentExpression: {array: false, object: false}
			},
			{enforceForRenamedProperties: false}
		],
		'no-invalid-this': ['error'],
		'no-underscore-dangle': ['off'],
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		}],
		'func-names': ['off'],
		'object-shorthand': ['error', 'always', {
			avoidQuotes: true,
			ignoreConstructors: true,
			avoidExplicitReturnArrows: true
		}],
		'generator-star-spacing': ['error', {
			before: false,
			after: true,
			anonymous: {before: false, after: false},
			method: {before: false, after: false}
		}],

		// eslint-comments rules
		'eslint-comments/no-unused-disable': ['error'],
		'eslint-comments/disable-enable-pair': ['error', {allowWholeFile: true}]
	}
};
