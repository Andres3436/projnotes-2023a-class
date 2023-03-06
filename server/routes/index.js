const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let iconSet = ["🤑","😎","🤬"];
  let icon = iconSet [Math.floor(Math.random() * 3)]
  console.log(`Icono: ${icon}`)
  res.render('index', { title: 'DWPCII.2023A', icon });
});

router.get('/author', function(req, res){

  let author = { 
  "name":"🙄Andres",
  "lastname": "Rodriguez Gaspar",
  "twitter": "@jesusomg",
  "job": "ITGAM",
};

res.render('author', author);

});

module.exports = router;
