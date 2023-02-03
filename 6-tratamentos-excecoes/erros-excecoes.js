 class CustomError extends Error {
 	constructor({message, data}) {
 		super(message);
 		this.data = data;
 	}
 }

try {
	const name = 'Pedro Dias';

	const myError = new CustomError({
		message: 'Custom error message',
		data: {
			type: 'Server error'
		}
	});

	throw myError;
} catch(err) {
	if(err.data.type === 'Server error') {
		console.log('FAILED! Try again later');
	}
} finally {
	console.log('Keep going...'); 
}