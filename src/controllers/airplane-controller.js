const { AirplaneService } = require('../services/index');

const airplaneService = new AirplaneService();

const create = async (req, res) => {
    try {
        const airplane = await airplaneService.create(req.body);
        return res.status(201).json({
            data: airplane,
            success: true,
            msg: "Successfully created a airplane"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            msg: "Not able to create a airplane"
        })
    }
}

module.exports = {
    create
}