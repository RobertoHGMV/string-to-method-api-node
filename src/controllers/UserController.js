const { validationResult } = require('express-validator');

const UserService = require('../services/UserService');
const UserRepository = require('../repositories/UserRepository');
const ReplacementRep = require('../repositories/ReplacementRepository');

module.exports = {
    async add(req, res) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty())
                return res.status(500).json({ errors: errors.array() });

            const { login } = req.body;
            const user = await UserService.add(login);

            return res.status(201).json(user);
        }
        catch (e) {
            return res.status(500).send({ error: 'Falha ao salvar usuário' });
        }
    },

    async getByKey(req, res) {
        try {
            const { user_id } = req.params;

            const user = await UserRepository.getByKey(user_id);

            return res.status(200).json(user);
        }
        catch (e) {
            return res.status(500).send({ error: 'Falha ao buscar usuário' });
        }
    },

    async getBy(req, res) {
        try {
            const { login } = req.query;

            const user = await UserRepository.getBy(login);

            return res.status(200).json(user);
        }
        catch(e) {
            return res.status(500).send({ error: 'Falha ao buscar usuário' });
        }
    },

    async getAll(req, res) {
        try {
            const users = await UserRepository.getAll();

            return res.status(200).json(users);
        }
        catch (e) {
            return res.status(500).send({ error: 'Falha ao buscar usuários' });
        }
    },

    async getReplacement(req, res) {
        try {
            const { user_id } = req.params;

            const replacement = await ReplacementRep.getBy(user_id);

            return res.status(200).json(replacement);
        }
        catch(e) {
            return res.status(500).send({ error: 'Falha ao carregar substituição' })
        }
    },

    async update(req, res) {
        try {
            const { user_id } = req.headers;
            const { login } = req.body;
            
            const user = await UserService.update(user_id, login);

            return res.status(200).json(user);
        }
        catch(e) {
            return res.status(500).send({ error: e });
        }
    },

    async delete(req, res) {
        try {
            const { user_id } = req.headers;

            await UserService.delete(user_id);

            return res.status(204).json({ msg: 'Operação realizada com sucesso' });
        }
        catch(e) {
            return res.status(500).send({ error: e });
        }
    }
};