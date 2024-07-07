const { Flight } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository{
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
            // const flight = await Flight.update(data, {
            //     where: {
            //         id: flightId
            //     }
            // });
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
    
    async getAllCities(filter) {
        try {
            if (filter.name) {
                const cities = await Flight.findAll({
                    where: {
                        name: {
                           [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }
            const flight = Flight.findAll();
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight-repository")
            throw { error };
        }
    }
};

module.exports = FlightRepository;
