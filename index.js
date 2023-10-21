require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const server = express();


const PORT = process.env.PORT;

const routes = require('./routes');
const URI_MONGO = process.env.MONGO_URI;


server.use(express.json());
server.use('/api/v1', routes);

const mongoConnect = async () => {
    try {
        await mongoose.connect(URI_MONGO);
        console.log('Conectamos a la base de datos.');
    } catch (error) {
        console.log(error);
    }
};

mongoConnect();

server.listen(PORT, () => {
    console.log(`Funcionando en puerto ${PORT}`);
});