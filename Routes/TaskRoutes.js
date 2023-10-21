const express = require('express');
const validateJWT = require('../utils/validate');

const router = express.Router();

const {
    getAllProducto,
    getOneProductoById,
    searchProductos,
    addProducto,
    updateProducto,
    deleteProducto,
} = require('../controllers/ProductoController');



router.get('/', getAllProducto);


router.get('/search', validateJWT, searchProducto);


router.get('/:id', getOneProductoById);


router.post('/', validateJWT, addProducto);


router.patch('/:id', updateProducto);

//Eliminar una tarea

router.delete('/:id', deleteProducto);



module.exports = router;