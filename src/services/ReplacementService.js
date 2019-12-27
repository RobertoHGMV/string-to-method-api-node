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
        const replacement = RepRepository.getBy(user_id);

        if (replacement) {
            replacement = await RepRepository.update();
        }
        else {
            const words = this.replaceWords(fullWords, method);
            replacement = await RepRepository.add({ fullWords, method, words, user: user_id });
        }
        
        return replacement; 
    }
};