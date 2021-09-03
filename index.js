const Koa = require('koa');

const app = new Koa();
const PORT = 1511;

app.user(async (ctx) => {
	ctx.body = {
		status: 'success',
		message: 'hello, world!'	
	};
});

const server = app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;