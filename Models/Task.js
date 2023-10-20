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

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

/*
{
    _id: ObjectId('23hd43j3j4kd5462')
}

*/