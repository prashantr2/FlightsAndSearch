const { AirplaneRepository } = require('../repositories/index');

class AirplaneService {
    constructor () {
        this.airplaneRepository = new AirplaneRepository();
    }
    
    async createAirplane(data) {
        try {
            const airplane = await this.airplaneRepository.createAirplane(data); 
            return airplane;
        } catch (error) {
            console.log("Something went wrong in airplane-service")
            throw {error};
        }
    }

    async destroyAirplane(airplaneId) {
        try {
            const response = await this.airplaneRepository.destroyAirplane(airplaneId); 
            return response;
        } catch (error) {
            console.log("Something went wrong in airplane-service")
            throw {error};
        }
    }

    async updateAirplane(airplaneId, data) {
        try {
            const airplane = await this.airplaneRepository.updateAirplane(airplaneId, data); 
            return airplane;
        } catch (error) {
            console.log("Something went wrong in airplane-service")
            throw {error};
        }
    }

    async getAirplane(airplaneId) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(airplaneId); 
            return airplane;
        } catch (error) {
            console.log("Something went wrong in airplane-service")
            throw {error};
        }
    }

    async getAllCities(filter) {
        try {
            const cities = await this.airplaneRepository.getAllCities({ name: filter.name });
            return cities;
        } catch (error) {
            console.log("Something went wrong in airplane-service")
            throw {error};
        }
    }
}

module.exports = { 
    AirplaneService
}
