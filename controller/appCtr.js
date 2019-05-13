var burger = require('../models/burgerModel');
var express = require('express');
var router = express();

router.get("/", (req, res) => {
    burger.select((data) => {

        res.render("index", {
            burger: data
        })
    })

})

router.put("/api/eat/:id", (req, res) => {
    var id = req.params.id;
    burger.update(id, (data) => {
        res.json(data)
    })
})

router.post("/api/add", (req, res) => {
    var name = req.body.name;
    console.log(`burger name: ${name}`)
    burger.create(name, (data) => {
        res.json(data)
    })
})











module.exports = router;