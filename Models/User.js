const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const User = mongoose.model('Paciente', PacienteSchema);

module.exports = Paciente;