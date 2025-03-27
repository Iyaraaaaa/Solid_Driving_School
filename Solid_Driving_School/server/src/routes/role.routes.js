const express = require('express');
const { findAllRoles } = require('../controller/role.controller');

const router = express.Router();


router.get('/',findAllRoles);


module.exports = router;