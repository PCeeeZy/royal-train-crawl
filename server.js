const express = require('express');
const sequelize = require('./config/connection');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'))

app.use(routes);

// sync db with server on startup
    // change force to true and lose your db
sequelize.sync({force: false}).then(()=> {
    app.listen(PORT, ()=> {
        console.log(`Server has started. If testing local, find it at http://localhost:${PORT}`)
    })
})