/* --------------------
 * @overlookmotel/eslint-config module
 * Tests
 * ------------------*/

'use strict';

// Modules
const chai = require('chai'),
	{expect} = chai,
	eslintConfig = require('../index');

// Init
chai.config.includeStack = true;

// Tests

describe('Tests', function() {
	it.skip('all', function() {
		expect(eslintConfig).to.be.ok;
	});
});
