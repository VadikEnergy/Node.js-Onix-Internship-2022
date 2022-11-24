const express = require('express');
const http = require('http');

const UserRouter = require('../components/Users/router');

module.exports = {
    init(app) {
        const router = express.Router();

        app.use('/api', UserRouter);

        app.use((req, res) => {
            res.status(404).send(http.STATUS_CODES[404]);
        });

        app.use(router);
    },
};
