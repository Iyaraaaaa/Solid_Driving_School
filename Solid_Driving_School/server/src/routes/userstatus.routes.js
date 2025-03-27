const express = require('express');
const { findAllUserStatuses } = require('../controller/userstatus.controller');

const router = express.Router();


router.get('/',findAllUserStatuses);


module.exports = router;