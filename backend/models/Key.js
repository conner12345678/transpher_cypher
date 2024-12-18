const mongoose = require('mongoose')

const keySchema = new mongoose.Schema({
    key: {
        type: Number
    }
})

module.exports = mongoose.model("Key", keySchema)