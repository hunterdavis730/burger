var orm = require("../config/orm");

module.exports = {
    select: function (cb) {
        orm.selectAll(cb)
    },
    create: function (burger, cb) {
        orm.insert(burger, cb)
    },
    update: function (id, cb) {
        orm.update(id, cb)
    }
}