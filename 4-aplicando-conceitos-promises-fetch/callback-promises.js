//Callback
function doSomething(callback) {
	setTimeout(function(){
		console.log('doSomething');

		callback('First Data')
	}, 1000);
}

function doOtherThing(callback) {
	setTimeout(function() {
		console.log('doOtherThing')

		callback('Second Data')
	}, 1000);
}

/*function doAll() {
	doSomething((data) => {
		let processedData = data.split('');

		doOtherThing((data2) => {
			let processedData2 = data2.split('');

			setTimeout(() => {
				console.log(processedData, processedData2);
			}, 1000);
		});
	});
}*/

function doAll() {
	try {
		doSomething((data) => {
			let processedData = data.split('');

			try {
				doOtherThing((data2) => {
					let processedData2 = data2.split('');

					try {
						setTimeout(() => {
							console.log(processedData, processedData2);
						}, 1000);
					} catch(err) {
						console.log('Error 500 Timeout');
					}
				});
			} catch (err) {
				console.log('Error 002');
			}
		});
	} catch(err) {
		console.log('Error 001'); 
	}
}

//doAll();

//Promises
//(Pending, Fullfilled, Rejected)
const doSomethingPromise = () => new Promise((resolve, reject) => {
	//throw new Error('Something went WRONG');
	setTimeout(() => {
		console.log('- doSomethingPromise -');

		resolve('First data');
	}, 5000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
	//throw new Error('Something went wrong here');
	setTimeout(() => {
		console.log('- doOtherThingPromise -');

		resolve('Second Data');
	}, 1000);
});

/*doSomethingPromise.then(data => { console.log(data) }).catch(err => {console.log('-- FAIL --\n' + err) });
doOtherThingPromise.then(data => { console.log(data) }).catch(err => { console.log('-- FAIL --' + err) });*/

/*doSomethingPromise()
	.then(data => {	console.log(data.split('')) })
	.then(() => {
		doOtherThingPromise()
			.then(data2 => { console.log(data2.split('')) })
	})			
	.catch(err => { console.log('FAIL: ', err) });*/

//Executar promises simultaneamente
/*Promise.all([doSomethingPromise(), doOtherThingPromise()])
	.then(data => {
		console.log(data[0].split(''), data[1].split(''));
	})
	.catch(err => { console.log(err) });
*/

//Executar promisses de acordo com o tempo de excu????o de cada uma
Promise.race([doOtherThingPromise(), doOtherThingPromise()])
	.then(data => {
		console.log(data.split());
	});