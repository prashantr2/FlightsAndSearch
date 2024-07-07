class CrudRepository{
    constructor(model) {
        this.model = model;
    } 
    
    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in crud-repository")
            throw { error };
        }
    }

    async destroy(modelId) {
        try {
            await this.model.destroy({
                where: {
                    id: modelId
                }
            }) 
            return true;
        } catch (error) {
            console.log("Something went wrong in crud-repository")
            throw { error };
        }
    }
    
    async update(modelId, data) {
        try {
            const response = await this.model.findByPk(modelId);
            response.name = data.name;
            await response.save();
            return response;
        } catch (error) {
            console.log("Something went wrong in crud-repository")
            throw { error };
        }
    }
    
    async get(modelId) {
        try {
            const response = this.model.findByPk(modelId);
            return response;
        } catch (error) {
            console.log("Something went wrong in crud-repository")
            throw { error };
        }
    }
    
    async getAll(filter) {
        try {
            const response = this.model.findAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in crud-repository")
            throw { error };
        }
    }
};

module.exports = CrudRepository;
