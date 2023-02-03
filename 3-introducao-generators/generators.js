//Generators
function* hello() {
	console.log('Hello');		//Hello
	yield 1;					//{value: 1, done: false}
	console.log('From');		//From
	const value = yield 'b';	//{value: b, done: false}
	console.log(value);			//The outside!
}

const helloIterator = hello();

console.log(helloIterator.next());
console.log(helloIterator.next());
console.log(helloIterator.next('The outside!'));

function* count(){
	let number = 0;
	
	while(true) {
		yield number;
		number++;
	}
}

const countIterator = count();
console.log(countIterator.next());

const obj = {
	values: [1, 2, 3, 4],
	*[Symbol.iterator]() {
		for(let i = 0; i < this.values.length; i++) {
			yield this.values[i];
		}
	}
};

for(let value of obj) {
	console.log(value);
}