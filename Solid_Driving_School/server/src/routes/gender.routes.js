const express = require('express');
const { findAllGenders } = require('../controller/gender.controller');

const router = express.Router();


router.get('/',findAllGenders);


module.exports = router;