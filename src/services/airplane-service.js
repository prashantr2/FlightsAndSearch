const CrudService = require('./crud-service');
const { Airplane } = require('../models/index');

class AirplaneService extends CrudService {
    constructor () {
        super(Airplane);
    }
}

module.exports = AirplaneService;
