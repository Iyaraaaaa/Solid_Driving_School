const express = require('express');
const trainerController = require('../controller/trainer.controller');
const authenticate = require('../middleware/auth.middleware');
const permission = require('../middleware/permisson.middleware');
const {saveTrainer,findAllTrainers,updateTrainer,deleteTrainer} = trainerController;
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

 
const router = express.Router();


router.get('/',findAllTrainers);
router.post('/',upload.single('photo'), saveTrainer);
router.put('/', upload.single('photo'), updateTrainer);
router.delete('/:email',  deleteTrainer);

// router.get('/',authenticate, permission('trainer:READ'),findAllTrainers);
// router.post('/',authenticate, permission('trainer:CREATE'), saveTrainer);
// router.put('/', authenticate, permission('trainer:UPDATE'), updateTrainer);
// router.delete('/:email', authenticate, permission('trainer:DELETE'), deleteTrainer);



module.exports = router;