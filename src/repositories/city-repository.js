const { City } = require('../models/index');
const { Op } = require('sequelize');

class CityRepository{
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong in city-repository")
            throw { error };
        }
    }

    async destroyCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            }) 
            return true;
        } catch (error) {
            console.log("Something went wrong in city-repository")
            throw { error };
        }
    }
    
    async updateCity(cityId, data) {
        try {
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in city-repository")
            throw { error };
        }
    }
    
    async getCity(cityId) {
        try {
            const city = City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in city-repository")
            throw { error };
        }
    }
    
    async getAllCities(filter) {
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                           [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }
            const city = City.findAll();
            return city;
        } catch (error) {
            console.log("Something went wrong in city-repository")
            throw { error };
        }
    }
};

module.exports = CityRepository;