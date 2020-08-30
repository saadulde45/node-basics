const databaseConfig = require("../configs/database.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = databaseConfig.url;
db.employees = require("./employee.model")(mongoose);

module.exports = db;