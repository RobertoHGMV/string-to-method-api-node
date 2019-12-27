const Replacement = require('../models/Replacement');

module.exports = {
    async add(replacement) {
        return await Replacement.create(replacement);
    },

    async update(replacement) {
        await Replacement.updateOne(replacement);
    },

    async getByKey(rep_id) {
        return await Replacement.findById(rep_id);
    },

    async getBy(user_id) {
        return await Replacement.findOne({ user: user_id });
    }
};