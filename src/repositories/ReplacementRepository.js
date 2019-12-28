const Replacement = require('../models/Replacement');

module.exports = {
    async add(replacement) {
        return await Replacement.create(replacement);
    },

    async update(replacement) {
        await Replacement.updateOne(replacement);
    },

    async delete(replacement) {
        await Replacement.deleteOne(replacement);
    },

    async getByKey(rep_id) {
        replacement = await Replacement.findById(rep_id);
        await replacement.populate('user').execPopulate();
        return replacement;
    },

    async getBy(user_id) {
        return await Replacement.findOne({ user: user_id });
    }
};