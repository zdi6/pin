var express = require('express');
var router = express.Router();
var connection = require('../db')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/shop', function(req, res, next) {
  connection.query('select * from shoplist', function (error, results, fields) {
    if (error) throw error;
      res.json({results})
  });
});
router.get('/swiper', function(req, res, next) {
  connection.query('select * from swiperlist', function (error, results, fields) {
    if (error) throw error;
      res.json({results})
  });
});
router.get('/nav', function(req, res, next) {
  connection.query('select * from navlist', function (error, results, fields) {
    if (error) throw error;
      res.json({results})
  });
});
module.exports = router;

