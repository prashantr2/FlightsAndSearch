const { FlightRepository, AirplaneRepository } = require('../repositories/index');
const { isEarlier } = require('../utils/helper');

class FlightService {
    constructor () {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }
    
    async createFlight(data) {
        try {
            if (!isEarlier(data.departureTime, data.arrivalTime)) {
                throw { error: 'Arrival Time can\'t be less than departure time.' }
            }
            const airplane = await this.airplaneRepository.get(data.airplaneId);
            const flight = await this.flightRepository.createFlight({ ...data, totalSeats: airplane.capacity });
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight-service")
            throw {error};
        }
    }

    async destroyFlight(flightId) {
        try {
            const response = await this.flightRepository.destroyFlight(flightId); 
            return response;
        } catch (error) {
            console.log("Something went wrong in flight-service")
            throw {error};
        }
    }

    async updateFlight(flightId, data) {
        try {
            const flight = await this.flightRepository.updateFlight(flightId, data); 
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight-service")
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId); 
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight-service")
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
            const flights = await this.flightRepository.getAllFlights(filter);
            return flights;
        } catch (error) {
            console.log("Something went wrong in flight-service")
            throw {error};
        }
    }
}

module.exports = FlightService;

