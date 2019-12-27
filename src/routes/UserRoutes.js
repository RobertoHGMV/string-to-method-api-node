const { check } = require('express-validator');

const UserController = require('../controllers/UserController');

module.exports = {
    addRoutes(routes) {
        routes.get('/v1/users', UserController.getByKey);

        routes.get('/v1/users/all', UserController.getAll);
        
        routes.post('/v1/users', 
        check('login').isLength({ min: 3, max: 10 }).withMessage('Login deve possuir de 3 a 10 caracteres'),
        UserController.add);
    }
};