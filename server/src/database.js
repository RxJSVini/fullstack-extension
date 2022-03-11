const mongoose = require('mongoose');
require('dotenv').config({});

const MongoDB = () =>{
    mongoose.connect(process.env.DEV_DB, { useNewUrlParser: true, useUnifiedTopology: true }) 

    .then(() => console.log('Conexão com o MongoDB estabelecida!'))
    .catch((e) =>{
        console.log(e.message);
    });
}

module.exports = MongoDB;