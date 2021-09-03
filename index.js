const express = require('express');
const generalRoutes = require('./routes/general-routes')


const app = express();
app.use(express.json())

generalRoutes(app);


app.listen(5000, () => {
    console.log("Listening on Port 5000")
});

module.exports = app;