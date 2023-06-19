const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

let initRoutesUser = (app)=>{
    router.get('/', userController.getUserPage)

    return app.use('/api',router)
}

module.exports = initRoutesUser