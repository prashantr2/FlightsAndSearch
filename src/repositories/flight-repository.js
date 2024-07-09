const { Flight } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository{
    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) filter.arrivalAirportId = data.arrivalAirportId;
        if (data.departureAirportId) filter.departureAirportId = data.departureAirportId;
        if (data.minPrice && data.maxPrice) {
            Object.assign(filter, { price: { [Op.between]: [data.minPrice, data.maxPrice] }});
        } else if (data.minPrice) {
            Object.assign(filter, { price: {[Op.gte]: data.minPrice }});
        } else if (data.maxPrice) {
            Object.assign(filter, { price: { [Op.lte]: data.maxPrice }});
        }
        return filter;
    } 

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight-repository")
            throw { error };
        }
    }

    async destroyFlight(flightId) {
        try {
            await Flight.destroy({
                where: {
                    id: flightId
                }
            }) 
            return true;
        } catch (error) {
            console.log("Something went wrong in flight-repository")
            throw { error };
        }
    }
    
    async updateFlight(flightId, data) {
        try {
            const flight = await Flight.findByPk(flightId);
            flight.name = data.name;
            await flight.save();
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight-repository")
            throw { error };
        }
    }
    
    async getFlight(flightId) {
        try {
            const flight = Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight-repository")
            throw { error };
        }
    }
    
    async getAllFlights(filter) {
        try {
            const filterObj = this.#createFilter(filter);
            const flights = await Flight.findAll({
                where: filterObj
            })
            return flights;
        } catch (error) {
            console.log("Something went wrong in flight-repository")
            throw { error };
        }
    }
    
    async updateFlight(flightId, data) {
        try {
            const flight = Flight.update(data, {
                where: {
                    id: flightId 
                }
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight-repository")
            throw { error };
        }
    }
};

module.exports = FlightRepository;
