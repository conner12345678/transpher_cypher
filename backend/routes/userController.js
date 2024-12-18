const express = require("express");
const router = express.Router();
const {findKey} = require('../controllers/key')

router.get('/', findKey);

module.exports = router