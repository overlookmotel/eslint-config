/* --------------------
 * `@overlookmotel/eslint-config` module
 * ------------------*/

'use strict';

// Exports

module.exports = {
	extends: [
		'airbnb-base',
		'plugin:eslint-comments/recommended'
	],
	parserOptions: {
		ecmaVersion: 2021
	},
	// Parse `.mjs` files as ES Modules.
	// Would be ideal to also interpret `.js` files in a directory with `package.json` containing
	// `"type": "module"` as ESM, but this is not currently supported by ESLint.
	// https://github.com/eslint/eslint/issues/14727
	overrides: [
		{
			files: ['*.mjs'],
			parserOptions: {
				sourceType: 'module'
			}
		}
	],
	plugins: ['jsdoc'],
	settings: {
		jsdoc: {
			preferredTypes: {
				// Use `{Object}` not `{object}` type for JSDoc params + return values
				object: {replacement: 'Object'}
			}
		}
	},
	rules: {
		// Alterations of airbnb rules
		'max-len': ['error', {
			code: 105,
			tabWidth: 2,
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
		'no-console': ['error'],
		'no-continue': ['off'],
		'no-await-in-loop': ['off'],
		'guard-for-in': ['off'],
		'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],
		'max-classes-per-file': ['off'],
		'no-nested-ternary': ['off'],
		'no-return-await': ['off'],

		// import rules
		'import/extensions': ['error', 'ignorePackages'],

		// eslint-comments rules
		'eslint-comments/no-unused-disable': ['error'],
		'eslint-comments/disable-enable-pair': ['error', {allowWholeFile: true}],

		// jsdoc rules
		// Comprises all `eslint-plugin-jsdoc`'s rules, except those flagged as "Disabled" below.
		// `returnsProp` tag is used for typing properties of return values of functions which return
		// an Object which various properties (essentially multiple return values).
		// This is not JSDoc syntax, but can't find a way to support multiple return values
		// with `eslint-plugin-jsdoc`.
		'jsdoc/check-access': ['error'],
		'jsdoc/check-alignment': ['error'],
		'jsdoc/check-examples': ['error'],
		// 'jsdoc/check-indentation': ['error'], // Disabled
		'jsdoc/check-line-alignment': ['error'],
		'jsdoc/check-param-names': ['error'],
		'jsdoc/check-property-names': ['error'],
		'jsdoc/check-syntax': ['error'],
		'jsdoc/check-tag-names': ['error', {definedTags: ['returnsProp']}],
		'jsdoc/check-types': ['error'],
		'jsdoc/check-values': ['error'],
		'jsdoc/empty-tags': ['error'],
		'jsdoc/implements-on-classes': ['error'],
		// 'jsdoc/match-description': ['error'], // Disabled
		'jsdoc/multiline-blocks': ['error'],
		// 'jsdoc/newline-after-description': ['error'], // Disabled
		'jsdoc/no-bad-blocks': ['error'],
		// 'jsdoc/no-defaults': ['error'], // Disabled
		// 'jsdoc/no-missing-syntax': ['error'], // Disabled
		'jsdoc/no-multi-asterisks': ['error'],
		// 'jsdoc/no-restricted-syntax': ['error'], // Disabled
		// 'jsdoc/no-types': ['error'], // Disabled
		'jsdoc/no-undefined-types': ['error', {definedTypes: ['Iterable']}],
		'jsdoc/require-asterisk-prefix': ['error'],
		'jsdoc/require-description': ['error'],
		// 'jsdoc/require-description-complete-sentence': ['error'], // Disabled
		// 'jsdoc/require-example': ['error'], // Disabled
		// 'jsdoc/require-file-overview': ['error'], // Disabled
		'jsdoc/require-hyphen-before-param-description': ['error'],
		// 'jsdoc/require-jsdoc': ['error'], // Disabled
		'jsdoc/require-param': ['error'],
		'jsdoc/require-param-description': ['error'],
		'jsdoc/require-param-name': ['error'],
		'jsdoc/require-param-type': ['error'],
		'jsdoc/require-property': ['error'],
		'jsdoc/require-property-description': ['error'],
		'jsdoc/require-property-name': ['error'],
		'jsdoc/require-property-type': ['error'],
		'jsdoc/require-returns': ['error', {forceRequireReturn: true, forceReturnsWithAsync: true}],
		'jsdoc/require-returns-check': ['error'],
		'jsdoc/require-returns-description': ['error'],
		'jsdoc/require-returns-type': ['error'],
		'jsdoc/require-throws': ['error'],
		'jsdoc/require-yields': ['error'],
		'jsdoc/require-yields-check': ['error'],
		'jsdoc/tag-lines': ['error'],
		'jsdoc/valid-types': ['error']
	}
};
