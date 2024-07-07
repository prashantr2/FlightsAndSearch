const express = require('express');
const { CityController, FlightController, 
        AirplaneController, AirportController } = require('../../controllers/index');
const { FlightMiddlewares } = require('../../middlewares/index');

const router = express.Router();

// City
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);


// Flight
router.post('/flight', 
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);
router.get('/flight/:id', FlightController.get);
router.get('/flight', FlightController.getAll);


// Airport
router.post('/airport', AirportController.create);
// router.get('/airport/:id', AirportController.get);
// router.get('/airport', AirportController.getAll);


// Airplane
router.post('/airplane', AirplaneController.create);
// router.get('/airplane/:id', AirplaneController.get);
// router.get('/airplane', AirplaneController.getAll);

module.exports = router;