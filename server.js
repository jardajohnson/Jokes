const express = require('express');
const app = express();
require('./server/config/mongoose.config');

// ! Middleware
app.use(express.json(), express.urlencoded({ extended: true }));
// ! Passes express functions to routes
require('./server/routes/joke.routes')(app);

const server = app.listen(8080, () =>
	console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
