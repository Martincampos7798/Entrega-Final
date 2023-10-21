const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    is_done: {
        type: Boolean,
        default: false,
    },
    end_date: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;

