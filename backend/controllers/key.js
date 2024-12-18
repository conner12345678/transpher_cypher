const Key = require('../models/Key')

const findKey = async(req,res) => {
    try {
        const key = await Key.findById(req.params.id)
        if(!key) return res.status(404).send('The key with the given ID was not found.')
        res.send(key)
    } catch (error) {
        res.status(500).send('Server Error')
    }
}

module.exports = {findKey}