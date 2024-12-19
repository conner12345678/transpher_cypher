const mongoose = require('mongoose')

const keySchema = new mongoose.Schema({
    theKey: {
        type: Number
    }
}, {collection: 'Keys'})

module.exports = mongoose.model("Key", keySchema)