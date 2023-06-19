require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./config/connectDB')
const initRoutes = require('./route/route')

const app = express()

// set up core
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended:true}));

initRoutes(app)

connectDB()

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log('server is running on port '+PORT);
})