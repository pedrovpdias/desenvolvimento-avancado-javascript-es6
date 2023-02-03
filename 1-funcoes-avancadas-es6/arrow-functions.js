/*var sum = function(a, b) {
	return a + b;
}

console.log(sum(5, 6));

//Arrow functions
var sum = (a, b) => a+b; // var sum = (a, b) => { return a+b }

console.log(sum(5, 7));*/

var objError = {
	showContext: function showContext() {
		setTimeout(function() {
			console.log('-- Normal function --');
			console.log(this);
			
			this.log('After 1000ms');
		}, 1000);
	},
	log: function log(value) {
		console.log(value);
	}
};

objError.showContext();

var obj = {
	showContext: function showContext() {
		setTimeout(() => {
			console.log('-- Arrow function --');
			console.log(this);

			this.log('After 1000ms');
		}, 1000);
	},
	log: function log(value) {
		console.log(value);
	}
};

obj.showContext();