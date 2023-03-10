//EventEmitter
const EventEmitter = require('events');

class Users extends EventEmitter {
	userLogged(data) {
		this.emit('User logged', data);
	}
}

const users = new Users();

/*users.on('User logged', data => {
	console.log(data);
});*/

users.once('User logged', data => {
	console.log(data);
});

users.userLogged({ user: 'pedrovpdias' });
users.userLogged({ user: 'pedrobola_' });