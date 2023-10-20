const {
    findAllTasks,
    createTask,
    searchTasks
} = require('../services/TaskService');
module.exports = {
    getAllTasks: (req, res) => {
        // código para conectar
        findAllTasks()
            .then((tasks) => {
                return res.status(200).send(tasks);
            })
            .catch((err) => {
                console.log('error mega importante super necesario saber que paso en el instante', err);
                return res.status(500).send('Hubo un error');
            });
    },
    getOneTaskById: (req, res) => {
        // código para conectar
        return res.send('getOneTaskById');
    },
    searchTasks: (req, res) => { // aggregate
        const params = {};
        if(req.query.is_done){
            params.is_done = req.query.is_done;
        }
        if(req.query.end_date){
            params.end_date = { $gt : req.query.end_date };
        }

        searchTasks(params)
        .then((tasks) => {
            return res.status(200).send(tasks);
        })
        .catch((err) => {
            console.log('error mega importante super necesario saber que paso en el instante', err);
            return res.status(500).send('Hubo un error');
        })
    },
    addTask: (req, res) => {
        const { description, end_date, is_done } = req.body;
        createTask({ description, end_date, is_done })
            .then((task) => {
                return res.status(201).send(task);
            })
            .catch((err) => {
                console.log('error mega importante super necesario saber que paso en el instante', err);
                return res.status(500).send('Hubo un error');
            });
    },
    updateTask: (req, res) => {
        // código para conectar
        return res.send('updateTask');
    },
    deleteTask: (req, res) => {
        // código para conectar
        return res.send('deleteTask');
    },
};