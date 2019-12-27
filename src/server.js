const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://roberto:admin@cluster0-yacpf.mongodb.net/string_method?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', routes);
app.listen(3001);