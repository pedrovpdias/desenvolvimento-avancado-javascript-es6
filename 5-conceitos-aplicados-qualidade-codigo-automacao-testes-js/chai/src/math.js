class Math {
	sum(a, b, callback) {
		setTimeout(() => {
			callback(a + b);
		}, 2000);		
	}

	multiply(a, b, callback) {
		setTimeout(() => {
			callback(a * b);
		}, 0);
	};
}

module.exports = Math;