const Key = require('../models/Key')

const findKey = async(req,res) => {
    try {
        const key = await Key.find({})
        res.status(200).json(key)
    } catch (error) {
        res.status(500).send('Server Error')
    }
}

module.exports = {findKey}