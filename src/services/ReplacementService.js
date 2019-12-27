const RepRepository = require('../repositories/ReplacementRepository');

module.exports = {
    replaceWords(fullWords, method) {
        const newWords = fullWords.split(',').map(word => word.trim());
    
        let words = [];
        for (const word of newWords) {
            const methodRep = method.replace('@field', word);
            words.push(methodRep);
        }
        
        return words;
    },

    async add(fullWords, method, user_id) {
        let replacement = await RepRepository.getBy(user_id);
        
        const words = this.replaceWords(fullWords, method);
        
        if (replacement) {
            await RepRepository.update({ _id: replacement._id, fullWords, method, words });
            replacement = await RepRepository.getByKey(replacement._id);
        }
        else {
            replacement = await RepRepository.add({ fullWords, method, words, user: user_id });
        }
        
        return replacement; 
    }
};