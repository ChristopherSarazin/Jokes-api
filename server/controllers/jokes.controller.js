const Jokes = require("../models/jokes.model");



module.exports.helloworld = (req, res) => {
    res.json({ message: "Hello Jokes-api with mongoose modularized!!!" });
}

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => {
            res.json({ results: allJokes })
        })
        .catch(err => {
            res.json({ err: err })
        })
}


module.exports.createNewJokes = (req, res) => {
    Jokes.create(req.body)
        .then(newJokesObj => {
            res.json({ results: newJokesObj })
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.findOneJokes = (req, res) => {
    console.log("trying to find one quote!")
    console.log(req.params.id)
    Jokes.findOne({ _id: req.params.id })
        .then(foundJokes => {
            res.json({ results: foundJokes })
        })
        .catch(err => {
            res.json({ err: err })
        })
}


module.exports.updateExistingJoke = (req, res) => {
    Jokes.findOneAndUpdate(
        { _id: req.params.id }, //find the objects whose _id == req.params.id
        req.body, //req.body is the information from the form to update with
        { new: true, runValidators: true } //new:true means return the newly updated info. 
    )
        .then(updatedJoke => {
            res.json({ results: updatedJoke })
        })
        .catch(err => {
            res.json({ err: err })
        })

}

module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(deletedJoke => {
            res.json({ results: deletedJoke})
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.findRandomJoke = (req, res) => {
    console.log("trying to find random quote thoooo")
    Jokes.find()
        .then(allJokes => {
            console.log("all jokes looks like this")
            let lengthOfAllJokes = allJokes.length;
            //get a random number from 0 to lengthOfAllJokes

            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            let randomIndex = getRandomInt(lengthOfAllJokes)

            console.log(allJokes[randomIndex])
            res.json({ results: allJokes[randomIndex] })
        })
        .catch(err => {
            res.json({ err: err })
        })
}