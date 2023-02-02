const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function() {
	//Hooks
	beforeEach(function() {
		value = 5;
	});

	//afterEach();

	const math = new Math();

	//.only executar apenas este teste
	//.skip pular este teste

	it('Sum two number', function(done) {
		this.timeout(3000);

		math.sum(value, 5, value => {
			assert.equal(value, 10);
			
			done();
		});
	});

	it('Multiply two numbers', function(done) {
		this.timeout(3000);
		math.multiply(value, 9, value => {
			assert.equal(value, 45);
			
			done();
		});
	});
});