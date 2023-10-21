const User = require('../models/Paciente');

const createPaciente = async (paciente) => {
    return await Paciente.create(paciente);
};

const findPaciente = async (paciente) => {
    return await Paciente.findOne(paciente);
}

module.exports = {
    createPaciente,
    findPaciente
}