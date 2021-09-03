'use strict';

module.exports = (app) => {
    const generalQueries = require('../queries/general-query');

    app.post('/login/patient', (req, res) => {
        generalQueries.loginUser(req, res);
    })

    app.post('/login/signup', (req, res) => {
        generalQueries.signUp(req, res);
    })
}