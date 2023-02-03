class Math {
	sum(a, b, callback) {
		setTimeout(() => {
			callback(a + b);
		}, 1000);
	}

	multiply(a, b, callback) {
		setTimeout(() => {
			callback(a * b);
		}, 10);
	}

	printSum(req, res, a, b) {
		//res.load('index', a + b);
		console.log(res.load('index', a + b));
	}
}

module.exports = Math;