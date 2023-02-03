const assert = require('assert');
const expect = require('chai').expect;
const sinon  = require('sinon');

const Math = require('../src/math.js');

describe('Math class', function() {
	const math = new Math();

	it('Somar dois números', function(done) {
		this.timeout(2500);

		math.sum(4, 5, value => {
			expect(value).to.equal(9);
		});

		done();
	});

	it('Multiplicar dois números', function(done) {
		this.timeout(2000);

		math.multiply(4, 5, value => {
			expect(value).to.equal(20);
		});

		done();
	});

	it.only('Call req with sum and index values', function() {
		const req = {};
		const res = {
			//load: sinon.spy(),
			load() {
				console.log('Done!');
			},
		};
		res.trade;

		//sinon.spy(res, 'load');
		sinon.stub(res, 'load').returns('All right!!');

		math.printSum(req, res, 5, 5);

		expect(res.load.calledOnce).to.be.true; 		//Verifica se o metodo foi invocado
		expect(res.load.args[0][0]).to.equal('index');	//Verifica se o primeiro argumento enviado pela função é igual a "index"
		expect(res.load.args[0][1]).to.equal(10);		//Verifica se o segundo argumento enviado pela função(total da soma) é igual a 10
		
	});
});