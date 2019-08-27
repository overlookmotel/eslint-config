/* --------------------
 * @overlookmotel/eslint-config module
 * ------------------*/

'use strict';

// Exports
module.exports = {
	plugins: [
		'node'
	],
	env: {
		node: true
	},
	parserOptions: {
		sourceType: 'script'
	},
	extends: [
		'airbnb-base',
		'plugin:eslint-comments/recommended',
		'plugin:node/recommended-script'
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
			// Would prefer `ignoreConstructors: true` but bug in ESLint:
			// https://github.com/eslint/eslint/issues/11595
			ignoreConstructors: false,
			avoidExplicitReturnArrows: true
		}],
		'generator-star-spacing': ['error', {
			before: false,
			after: true,
			anonymous: {before: false, after: false},
			method: {before: false, after: false}
		}],
		'no-console': ['error'],
		'no-continue': ['off'],
		'no-await-in-loop': ['off'],
		'guard-for-in': ['off'],
		strict: ['error', 'global'],
		'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],

		// eslint-comments rules
		'eslint-comments/no-unused-disable': ['error'],
		'eslint-comments/disable-enable-pair': ['error', {allowWholeFile: true}],

		// node rules
		'node/exports-style': ['error', 'module.exports'],
		'node/prefer-global/buffer': ['error', 'always'],
		'node/prefer-global/console': ['error', 'always'],
		'node/prefer-global/process': ['error', 'always'],
		'node/prefer-global/url-search-params': ['error', 'always'],
		'node/prefer-global/url': ['error', 'always']
	}
};
