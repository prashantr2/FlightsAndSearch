const { FlightService } = require('../services/flight-service');

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
            msg: "Not able to create a flight"
        })
    }
}


module.exports = {
    create,
    // destroy,
    // update,
    // get,
}