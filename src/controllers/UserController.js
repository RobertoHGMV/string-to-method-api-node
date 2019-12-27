const { validationResult } = require('express-validator');

const UserService = require('../services/UserService');
const UserRepository = require('../repositories/UserRepository');

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
            const { user_id } = req.headers;

            const user = await UserRepository.getByKey(user_id);

            return res.status(200).json(user);
        }
        catch (e) {
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
    }
};