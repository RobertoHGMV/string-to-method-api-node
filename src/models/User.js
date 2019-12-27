const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    login: String
}, {
    timestamps: true
}
);

module.exports = mongoose.model('User', UserSchema);