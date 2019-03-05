// requires connection to connection.js file (MySQL)
var connection = require ("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    
      arr.push(key + "=" + ob[key]);
    }
     // translate array of strings to a single comma-separated string
    return arr.toString();
  }

// Object for all our SQL queries
var orm = {
  selectAll: function(tableInput, cb) {
    // Returns a string for all rows in table
    var queryString = "SELECT * FROM " + tableInput + ";";
    //  Perform the query
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      // callback results
      cb(result);
    });
  },

  // This function with create a single table entry
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      // callback results
      cb(result);
    });
  },
  // This function will updatethe table with new entry
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
 };
// exports the orm object for the model burger.js)
module.exports = orm;