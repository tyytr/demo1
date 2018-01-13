var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');

router.post('/addUser',function (req, res, next) {
    // 打印post请求的数据内容
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.password);
    if (req.body.username == "a" && req.body.password == "a") {
        res.end(JSON.stringify(dataSuccess));
    } else {
        res.end(JSON.stringify(dataError));
    }
});
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// 增加用户
//TODO 同时支持get,post
router.get('/addUser', function(req, res, next) {
    console.log("add方法");
    userDao.add(req, res, next);
});

router.get('/queryAll', function(req, res, next) {
    userDao.queryAll(req, res, next);
});

router.get('/query', function(req, res, next) {
    userDao.queryById(req, res, next);
});

router.get('/deleteUser', function(req, res, next) {
    userDao.delete(req, res, next);
});

router.post('/updateUser', function(req, res, next) {
    userDao.update(req, res, next);
});

module.exports = router;