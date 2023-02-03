//Fetch
/*fetch('/data.json')
.then(responseStream => {
	if(responseStream.status === 200) {
		return responseStream.json();
	} else {
		throw new Error('Request error');
	}
})
	console.log(data);
})
.catch(err => {
	console.log('Error: ', err);
});*/

//ES7 Async/Await
const asyncTimer = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(98765);
	}, 2000);
});


const simpleFunction = async () => {
	const data = await asyncTimer();
	
	return data;

}

simpleFunction()
	.then(data => {
		console.log(data);
	})
	.then(() => console.log('Success'))
	.catch(err => {
		console.log(err);
	});