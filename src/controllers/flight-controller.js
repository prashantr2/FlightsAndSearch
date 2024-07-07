const FlightService = require('../services/flight-service');

const flightService = new FlightService();

const create = async(req, res) => {
    try {
        const flight = await flightService.createFlight(req.body); 
        return res.status(201).json({
            data: flight,
            success: true,
            msg: "Successfully created a flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            msg: "Not able to create a flight",
            error: error
        })
    }
}

const get = async(req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id); 
        return res.status(200).json({
            data: flight,
            success: true,
            msg: "Successfully get the flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            msg: "Not able to get the flight",
            error: error
        })
    }    
}

const getAll = async(req, res) => {
    try {
        const flight = await flightService.getAllFlights(req.query); 
        return res.status(200).json({
            data: flight,
            success: true,
            msg: "Successfully get the flights"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            msg: "Not able to get the flights",
            error: error
        })
    }    
}


module.exports = {
    create,
    // destroy,
    // update,
    get,
    getAll,
}