require('dotenv').config();

const {
    createUser,
    findUser
} = require('../services/PacienteService');

const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    addPaciente: (req, res) => {
        const { name, email, password, phone } = req.body;
        createPaciente({ name, email, password, phone })
            .then((paciente) => {
                return res.status(201).send(paciente);
            })
            .catch((err) => {
                console.log('Verifica el error, Algo paso', err);
                return res.status(500).send('Hubo un error');
            });
    },

    authPaciente: (req, res) => {
        const { email, password } = req.body;
        findUser({email, password})
        .then((paciente) => {
            if(paciente){
                const token = jwt.sign({email}, SECRET_KEY, { expiresIn: '3m'});
                return res.send(token);
            }else{
                return res.status(401).send('Error de autenticación');
            }
        })
        .catch((err) => {
            console.log('Algo paso, verifica el error', err);
            return res.status(500).send('Hubo un error');
        })
    }
}