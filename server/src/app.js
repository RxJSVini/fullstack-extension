const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require("./routes");
const MongoDB = require('./database')();
const app = express();

app.use(cors({
    origin:"*"
}));

app.get("/", (req, res) =>{
    return res.json({
        message:"Por favor acesse /api"
    });
});



app.use(morgan("dev"));
require('dotenv').config({});

app.use(express.json({limit:'200mb', extended:false}));
app.use(express.urlencoded({limit:'200mb', extended:false}));

app.use("/api", routes);

const port = process.env.PORT || 8089

app.listen(port, () => console.log(`Nodejs server is running! ${port}`))