const JokesController = require("../controllers/jokes.controller");


module.exports = app => {
    app.get("/api", JokesController.helloworld);
    app.get("/api/jokes", JokesController.findAllJokes);
    app.post("/api/jokes", JokesController.createNewJokes);
    app.get("/api/jokes/random", JokesController.findRandomJoke)
    app.get("/api/jokes/:id", JokesController.findOneJokes);
    app.put("/api/jokes/:id", JokesController.updateExistingJoke);
    app.delete("/api/jokes/:id", JokesController.deleteJoke);

}