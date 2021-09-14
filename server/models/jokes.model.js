const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    //fields that a quote table can have
    setup: {
        type: String
        // required: [true, "Joke content is required!"]
    },
    punchline: {
        type: String
        // required: [true, "Joke content is required!"]
    }

})

//register the above code at a table in mongodb
const Jokes = mongoose.model("Jokes", JokesSchema)



module.exports = Jokes;