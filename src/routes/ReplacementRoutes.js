const { check } = require('express-validator');

const RepController = require('../controllers/ReplacementController');

module.exports = {
    addRoutes(routes) {
        routes.get('/v1/replacement/:rep_id', RepController.getBy);

        routes.post('/v1/replacement', 
        check('fullWords').isLength({ min: 1 }).withMessage('Nenhuma palavra para substituição informada'),
        check('method').isLength({ min: 1 }).withMessage('Método para substituição não informado'),
        RepController.add);
        
        routes.post('/v1/replacement/words',
        check('fullWords').isLength({ min: 1 }).withMessage('Nenhuma palavra para substituição informada'),
        check('method').isLength({ min: 1 }).withMessage('Método para substituição não informado'),
        RepController.replaceWords);
    }
};