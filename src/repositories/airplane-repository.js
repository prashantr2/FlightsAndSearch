const { Airplane } = require('../models/index');
const { Op } = require('sequelize');

class AirplaneRepository{
    async createAirplane({ name }) {
        try {
            const airplane = await Airplane.create({ name });
            return airplane;
        } catch (error) {
            console.log("Something went wrong in airplane-repository")
            throw { error };
        }
    }

    async destroyAirplane(airplaneId) {
        try {
            await Airplane.destroy({
                where: {
                    id: airplaneId
                }
            }) 
            return true;
        } catch (error) {
            console.log("Something went wrong in airplane-repository")
            throw { error };
        }
    }
    
    async updateAirplane(airplaneId, data) {
        try {
            // const airplane = await Airplane.update(data, {
            //     where: {
            //         id: airplaneId
            //     }
            // });
            const airplane = await Airplane.findByPk(airplaneId);
            airplane.name = data.name;
            await airplane.save();
            return airplane;
        } catch (error) {
            console.log("Something went wrong in airplane-repository")
            throw { error };
        }
    }
    
    async getAirplane(airplaneId) {
        try {
            const airplane = Airplane.findByPk(airplaneId);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in airplane-repository")
            throw { error };
        }
    }
    
    async getAllCities(filter) {
        try {
            if (filter.name) {
                const cities = await Airplane.findAll({
                    where: {
                        name: {
                           [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }
            const airplane = Airplane.findAll();
            return airplane;
        } catch (error) {
            console.log("Something went wrong in airplane-repository")
            throw { error };
        }
    }
};

module.exports = AirplaneRepository;
