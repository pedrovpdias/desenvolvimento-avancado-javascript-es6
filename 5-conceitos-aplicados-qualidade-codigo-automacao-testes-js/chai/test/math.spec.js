const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;

describe('Math class', function() {
	beforeEach(function() {
		value = 5;
	})

	const math = new Math;

	it('Somar dois números', function(done) {
		this.timeout(3000);

		math.sum(value, 9, value => {
			//assert.equal(value, 14); --mocha
			expect(value).to.equal(14);

			done();
		});
	});

	it('Multiplicar dois números', function(done) {
		this.timeout(3000);

		math.multiply(value, 9, value => {
			// assert.equal(value, 45); --mocha
			expect(value).to.equal(45); 

 
			done();
		});
	});

	it.only('Checagem de perfil', function() {
		const user = {
			name: 'Pedro Vinícius Pereira Dias',
			username: 'PedroBola_',
			email: 'pedrovpdias@gmail.com',
			password: '*****',
			logged: true
		}

		const dbUser = {
			name: 'Pedro Vinícius Pereira Dias',
			username: 'PedroBola_',
			email: 'pedrovpdias@gmail.com',
			password: '*****',
			logged: true
		}

		expect(user).to.have.property('username').equal('PedroBola_');
		expect(user).to.have.property('password').equal('*****');
		expect(user).to.have.property('logged').equal(true);
		//comparar objetos
		//expect(user).to.equal(dbUser); --Return ERROR
		expect(user).to.deep.equal(dbUser);
	});
});