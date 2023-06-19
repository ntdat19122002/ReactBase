const express = require('express')
const adminController = require('../controllers/adminController')
const router = express.Router()

let initRoutesAdmin = (app)=>{
    router.get('/', adminController.getAdminPage)

    return app.use('/api/admin',router)
}

module.exports = initRoutesAdmin