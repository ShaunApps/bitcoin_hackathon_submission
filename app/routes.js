const express = require('express');
const router = express.Router();
const mainController = require('./controllers/main.controller');
const assetsController = require('./controllers/assets.controller');
const inputController = require('./controllers/input.controller');

const priceAssetsController = require('./controllers/priceassets.controller');



var request = require('request');




module.exports = router;

// main route for home page
router.get('/', mainController.showHome);

//maybe for other page
router.use('/assets', assetsController.presentAssets);


router.get('/input', inputController.getAddress);

// router.get('/priceassets', priceAssetsController.get_USD_AMNT);
