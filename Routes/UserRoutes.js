const express = require('express');

const router = express.Router();

const {
    addPaciente,
    authPaciente
} = require('../controllers/PacienteController');

// Autenticando un usuario
router.post('/auth', authPaciente);

//Agregar un usuario nuevo
router.post('/', addPaciente);

module.exports = router;