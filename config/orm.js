var connection = require("./connection");

module.exports = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, resp) {

            if (err) throw err;
            cb(resp)
        })
    },

    insert: function (burger, cb) {
        connection.query("INSERT INTO burgers (burger_name) VALUES(?)", [burger], (err, resp) => {
            if (err) throw err;
            cb(resp)
        })
    },

    update: function (id, cb) {
        connection.query("UPDATE burgers SET devoured = 1  WHERE id = ?", [id], (err, resp) => {
            if (err) throw err;
            cb(resp)
        })
    }



}