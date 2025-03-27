const express = require('express');
const contactusController = require('../controller/contactus.controller');
const {saveContactUs,findAllContactUs,deleteContactUs} = contactusController;

 
const router = express.Router();


router.get('/',findAllContactUs);
router.post('/', saveContactUs);
router.delete('/:contactUsId', deleteContactUs);


module.exports = router;