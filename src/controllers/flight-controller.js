const FlightService = require('../services/flight-service');
const { ClientErrorsCodes, ServerErrorsCodes, SuccessCodes } = require('../utils/status-codes');

const flightService = new FlightService();

const create = async(req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price,
        }

        const flight = await flightService.createFlight(flightRequestData); 
        return res.status(SuccessCodes.CREATED).json({
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
        return res.status(SuccessCodes.OK).json({
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
        return res.status(SuccessCodes.OK).json({
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

const update = async(req, res) => {
    try {
        const flight = await flightService.updateFlight(req.params.id, req.body); 
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            msg: "Successfully updated the flight"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            msg: "Not able to update the flight",
            error: error
        })
    }    
}

module.exports = {
    create,
    // destroy,
    update,
    get,
    getAll,
}