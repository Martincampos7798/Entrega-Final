const {
    findAllProductos,
    createProducto,
    searchProductoss
} = require('../services/askService');
module.exports = {
    getAllProductos: (req, res) => {
        // código para conectar
        findAllProductoss()
            .then((productos) => {
                return res.status(200).send(productos);
            })
            .catch((err) => {
                console.log('Verifica el Error', err);
                return res.status(500).send('Hubo un error');
            });
    },
    getOneProductoById: (req, res) => {
        // código para conectar
        return res.send('getOneProductoById');
    },
    searchProductos: (req, res) => { // aggregate
        const params = {};
        if(req.query.is_done){
            params.is_done = req.query.is_done;
        }
        if(req.query.end_date){
            params.end_date = { $gt : req.query.end_date };
        }

        searchProductos(params)
        .then((productos) => {
            return res.status(200).send(productos);
        })
        .catch((err) => {
            console.log('Verifica el Error', err);
            return res.status(500).send('Hubo un error');
        })
    },
    addProducto: (req, res) => {
        const { description, end_date, is_done } = req.body;
        createProducto({ description, end_date, is_done })
            .then((producto) => {
                return res.status(201).send(producto);
            })
            .catch((err) => {
                console.log('Verifica el Error', err);
                return res.status(500).send('Hubo un error');
            });
    },
    updateProducto: (req, res) => {
        // código para conectar
        return res.send('updateProducto');
    },
    deleteProducto: (req, res) => {
        // código para conectar
        return res.send('deleteProducto');
    },
};