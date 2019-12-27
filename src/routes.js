const express = require('express');

const routes = express.Router();

const UserRoutes = require('./routes/UserRoutes');
const ReplacementRoutes = require('./routes/ReplacementRoutes');

UserRoutes.addRoutes(routes);
ReplacementRoutes.addRoutes(routes);

module.exports = routes;