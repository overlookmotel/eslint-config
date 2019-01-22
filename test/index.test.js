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

it('Exports an object', function() {
	expect(eslintConfig).to.be.an('object');
});
