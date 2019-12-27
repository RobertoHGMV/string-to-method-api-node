const monoose = require('mongoose');

const ReplacementSchema = monoose.Schema({
    fullWords: String,
    method: String,
    words: [String],
    user: {
        type: monoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = monoose.model('Replacement', ReplacementSchema);