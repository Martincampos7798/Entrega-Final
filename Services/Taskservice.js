const Producto = require('../models/Producto');

const findAllProducto = async () => {
    return await Producto.find();
};

const createProducto = async (producto) => {
    return await Producto.create(producto);
};

const searchProducto = async (params) => {
    return await Producto.find(params);
}

module.exports = {
    findAllProducto,
    createProducto,
    searchProducto
};