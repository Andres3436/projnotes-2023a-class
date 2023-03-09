// Importting Express library
import express from 'express';
const { Router } = express;
// Creating a Router Instace
const router = express.Router();

// Creating the router
router.get('/author', (req, res)=>{
// Responding to the client using res object
 res.json({
    "name":"Jesus",
    "lastname": "Rodriguez",
    "twitter": "@jesusomg",
    "job": "ITGM",
 });   
});  // function(req, res){}

// Exporting the router
export default router;