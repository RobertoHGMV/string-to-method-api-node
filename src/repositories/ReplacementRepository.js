const Replacement = require('../models/Replacement');

module.exports = {
    async add(replacement) {
        return await Replacement.create(replacement);
    },

    async update() {
        
    },

    async getByKey(rep_id) {
        return await Replacement.find({ _id: rep_id });
    },

    async getBy(user_id) {
        return await Replacement.findOne({ user: user_id });
    }
};