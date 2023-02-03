function sumOld(){
	let value = 0;

	for(let i = 0; i < arguments.length; i++){
		value += arguments[i];
	}

	return value;
}

console.log(sumOld(5, 8, 3, 5, 6, 8, 1));

//Rest Operator ...
function sum(...args) {
	return args.reduce((total, value) => total + value, 0 );
}

//Spread operator
const arr = [5, 8, 3, 5, 6, 8, 1];
console.log(sum(...arr));

const obj = {
	id: 123,
	subObj: {
		class: 'Sentinel',
		agent: 'Killjoy'
	}
}

/* 
const obj2 = {
	...obj,
	name: 'Pedro'
}*/

const obj2 = {
	...obj,
	name: 'Pedro',
	subObj: {
		...obj.subObj
	}
}

obj2.subObj.agent = 'Phoenix';
obj2.subObj.class = 'Duelist';

console.log(obj);
console.log(obj2);