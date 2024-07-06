const { CityService } = require('../services/city-service');

const cityService = new CityService();

const create = async(req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            msg: "Successfully created a city"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            msg: "Not able to create a city"
        })
    }
}

const destroy = async(req, res) => {
    try {
        const response = await cityService.destroyCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            msg: "Successfully deleted the city"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            msg: "Not able to delete the city"
        })
    }
}

const get = async(req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            msg: "Successfully get the city"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            msg: "Not able to get the city"
        })
    }
}

const update = async(req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            success: true,
            msg: "Successfully updated the city"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            msg: "Not able to updated the city"
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}