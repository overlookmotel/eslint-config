/* --------------------
 * @overlookmotel/eslint-config module
 * Tests
 * ------------------*/

'use strict';

// Modules
const eslintConfig = require('../index.js');

// Tests

it('Exports an object', () => { // eslint-disable-line jest/lowercase-name
	expect(eslintConfig).toBeObject();
});
