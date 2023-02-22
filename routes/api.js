// Importting Express library
var express = require('express');
// Creating a Router Instace
var router = express.Router();

// Creating the router
router.get('/author', function(req, res)
 res.json({
    "name":"Jesus",
    "lastname": "Rodriguez",
    "twitter": "@jesusomg",
    "job": "ITGM",
 });   
});  // function(req, res){}

// Exporting the router
module.exports = router;