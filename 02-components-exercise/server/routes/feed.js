const router = require('express').Router();
const feedController = require('../controllers/feed');

router.post('/street/create', feedController.createStreet);
router.post('/house/create', feedController.createHouse);
router.post('/house/edit/:id', feedController.editHouse);
//router.post('/house/delete/:id', feedController.deleteHouse);
router.get('/street/all', feedController.getStreets);
router.get('/houses/all', feedController.getHouses);

module.exports = router;