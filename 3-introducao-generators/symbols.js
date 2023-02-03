// Symbols
const uniqueId = Symbol('ID');
console.log(uniqueId);

const obj = {
	name: 'Pedro',
	age: 29,
	//uniqueId: 'teste'
	[uniqueId]: 'Teste'
};

console.log(obj); // {name: Pedro, age: 29, Symbol(ID): Teste}
console.log(Object.keys(obj)); // [name, age]
console.log(Object.getOwnPropertySymbols(obj)); // Symbol(ID)

//Well Known Symbols
console.log(Symbol.iterator);
console.log(Symbol.split);
console.log(Symbol.toStringTag);

const arr = [1, 2, 3, 4, 5];

// Symbol.iterator
const it = arr[Symbol.iterator]();
console.log(it);

/*while(true){
	let { value, done } = it.next();

	if(done) {
		break;
	}

	console.log(value);
}*/

for(let value of it) {
	console.log(value);
}

var str = 'Digital Inovation One';

for(let value of str) {
	console.log(value);
}

const object = {
	values: [1, 2, 3, 4],
	[Symbol.iterator]() {
		let i = 0;

		return {
			next: () => {
				i++;

				return {
					value: this.values[i - 1],
					done: i > this.values.length
				};
			}
		};
	}
};

const iterator = object[Symbol.iterator]();

for(let val of object) {
	console.log(val);
}