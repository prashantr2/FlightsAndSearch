const { ClientErrorsCodes } = require('../utils/status-codes');

const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId || 
        !req.body.arrivalAirportId ||
        !req.body.departureTime || 
        !req.body.arrivalTime || 
        !req.body.price
    ) {
        return res.status(ClientErrorsCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            msg: "Request body is invalid",
            err: "Missing required fields in payload"
        })
    }
    
    next();
}

module.exports = {
    validateCreateFlight
}