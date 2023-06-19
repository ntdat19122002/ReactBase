const express = require('express')
const homeController = require('../controllers/homeController')
const router = express.Router()

let initRoutes = (app)=>{
    router.get('/', homeController.getHomePage)

    return app.use('/',router)
}

module.exports = initRoutes