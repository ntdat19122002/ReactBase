const initRoutesAdmin = require("./admin")
const initRoutesUser = require("./user")

const initRoutes = (app) => {
    initRoutesAdmin(app)
    initRoutesUser(app)
}

module.exports = initRoutes