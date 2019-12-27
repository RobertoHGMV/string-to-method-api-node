const User = require('../models/User');

module.exports = {
    async add(login) {
        return await User.create(login);
    },

    async getBy(login) {
        return await User.findOne({ login });
    },

    async getByKey(user_id) {
        return await User.findOne({ _id: user_id }, 'login -_id');
    },

    async getAll() {
        return await User.find({}, 'login');
    }
};