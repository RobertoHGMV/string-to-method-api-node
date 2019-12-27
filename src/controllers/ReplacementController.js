const { validationResult } = require('express-validator');

const ReplacementServ = require('../services/ReplacementService');
const ReplacementRep = require('../repositories/ReplacementRepository');

module.exports = {
    async add(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty())
                return res.status().json({ errors: errors.array() });

            const { fullWords, method } = req.body;
            const { user_id } = req.headers;

            const replacement = await ReplacementServ.add(fullWords, method, user_id);

            return res.status(201).json(replacement);
        }
        catch(e) {
            return res.status(500).send({ error: 'Falha ao salvar substituição' });
        }
    },

    async getBy(req, res) {
        try {
            const { rep_id } = req.params;
            
            const replacement = await ReplacementRep.getByKey(rep_id);

            return res.status(200).json(replacement);
        }
        catch(e) {
            return res.status(500).send({ error: 'Falha ao carregar substituição' });
        }
    },

    async replaceWords(req, res) {
        try {
            const { fullWords, method } = req.body;

            const words = ReplacementServ.replaceWords(fullWords, method);
            
            return await res.status(200).json(words);
        }
        catch(e) {
            return res.status(500).send({ error: 'Falha ao substuir palavras' });
        }
    }
}