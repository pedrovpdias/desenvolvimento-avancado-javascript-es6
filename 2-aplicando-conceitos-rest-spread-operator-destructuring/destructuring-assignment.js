var arr = ['Apple', 'Banana', 'Orange', ['Strawberry']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

//Destructuring Assignment
//var [apple, banana, orange] = ['Apple', 'Banana', 'Orange'];
var [apple, banana, orange, [strawberry]] = arr;

console.log(apple, banana, orange);
console.log(strawberry);

var obj = {
	name: 'Pedro',
	props: {
		age: 29,
		favoriteColors: ['black', 'white']
	}
};

var { name } = obj;
console.log(name);

var { name: nome } = obj;
console.log(nome);

//var age = obj.props.age;
var { props: { age } } = obj;
console.log(age);


//var color = obj.props.favoriteColors[0];
var { props: { favoriteColors: [ color, color2 ] } } = obj;
console.log(color);
console.log(color2);

var veg = [{ type: 'fruit' }, 'Apple', 'Banana', 'Orange', ['Strawberry']];

//var type = arr[0].type;
var [ { type } ] = veg;
console.log(type);

var [ {type: tipo} ] = veg;
console.log(tipo);

/*function sum(arr) {
	return [arr[0] + arr[1]];
}*/
function sum( [a, b] = [0, 0]){
	return a + b;
}
console.log(sum([5, 2]));

/*function multiply(obj){
	var a = obj.a;
	var b = obj.b;

	return a * b;
}*/
function multiply( {a, b} ){
	return a * b;
}
console.log(multiply({a: 5, b: 5}));