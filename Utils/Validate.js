require('dotenv').config();

const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const validateJWT = (request, response, next) => {
    const authHeader = request.get('authorization');
    if (!authHeader) {
        response.status(401).send('Denegado')
    }

    const accessToken = authHeader.split(' ')[1];

    jwt.verify(accessToken, SECRET_KEY, (error, decode) => {
        if (error) {
            response.status(401).send('Denegado')
        } else {
            next()
        }
    })
};

module.exports = validateJWT; 