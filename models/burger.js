// import from 'config/orm.js'

var orm = require ('../config/orm.js');

// created code that calls the ORM funtions using burger specific input for the ORM

var burgerModel = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(columns, values, cb) {
    orm.insertOne("burgers", columns, values, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

};

// Export the database functions for the controller (burgersController.js).
module.exports = burgerModel;

