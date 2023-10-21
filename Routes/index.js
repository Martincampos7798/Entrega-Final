const express = require('express');

const router = express.Router();

const ProductoRoutes = require('./ProductoRoutes');
const PacienteRoutes = require('./PacienteRoutes');

router.use('/Producto', ProductoRoutes);
router.use('/Paciente', PacienteRoutes);

module.exports = router;