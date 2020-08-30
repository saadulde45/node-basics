module.exports = app => {
  const employees = require("../controllers/employee.controller");

  var router = require("express").Router();

  // Create a new Employee
  router.post("/employees", employees.create);

  // Retrieve all Employees
  router.get("/employees", employees.findAll);

  // Retrieve a single Employee with id
  router.get("/employees/:id", employees.findOne);

  // Update a Employee with id
  router.put("/employees/:id", employees.update);

  // Delete a Employee with id
  router.delete("/employees/:id", employees.delete);

  app.use("/", router);
};