const JokeController = require('../controllers/joke.controller');

module.exports = (app) => {
	// Read (All)
	app.get('/api/jokes', JokeController.findAllJokes);
	// Read (One)
	app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
	// Read (Random)
	app.get('/api/jokes/get/random/', JokeController.findRandomJoke);
	app.put('/api/jokes/update/:id', JokeController.updateExistingJoke);
	app.post('/api/jokes/new', JokeController.createNewJoke);
	app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
};
