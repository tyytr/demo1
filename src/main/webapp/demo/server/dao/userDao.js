// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./userSqlMapping');
// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

console.log("0");

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    console.log("step 1");
    if(typeof ret === 'undefined') {
        res.json({
            "code":1,
            "msg": '操作失败'
            // code:'1',
            // msg: '操作失败'
        });
    } else {
        // res.send(ret);
        console.log(ret);
        res.json(ret);
        // console.log(ret);
        // return ret;
    }

    console.log("step over");

    //1.9
    // return ret;
 };

module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            console.log("前台传过来的参数"+param.username+":"+param.password);
            // 建立连接，向表中插入值
            // 'INSERT INTO user(id, name, password) VALUES(0,?,?)',
            // connection.query($sql.insert, [param.name, param.password], function(err, result) {
            connection.query($sql.insert, {username:param.username, password:param.password}, function(err, result) {
                if(result) {
                    result = {
                        "code": 200,
                        "msg":"增加成功"
                    };
                }
                console.log("开始");
                // 以json形式，把操作结果返回给前台页面
                // console.log(res);
                // console.log(result);
                jsonWrite(res, result);
                //res.send(req.param);

                //
                // response.getWriter().print(result);
                // console.log(response.getWriter().print(result));
                // 释放连接
                connection.release();
                console.log("释放连接");
            });
        });
        // res.redirect('/singup');
    },
    delete: function (req, res, next) {
        // delete by Id
        pool.getConnection(function(err, connection) {
            var id = +req.query.id;
            connection.query($sql.delete, id, function(err, result) {
                if(result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg:'删除成功'
                    };
                } else {
                    result = void 0;
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    update: function (req, res, next) {
        // update by id
        // 为了简单，要求同时传name和age两个参数
        var param = req.body;
        if(param.name == null || param.age == null || param.id == null) {
            jsonWrite(res, undefined);
            return;
        }

        pool.getConnection(function(err, connection) {
            connection.query($sql.update, [param.name, param.age, +param.id], function(err, result) {
                // 使用页面进行跳转提示
                if(result.affectedRows > 0) {
                    res.render('suc', {
                        result: result
                    }); // 第二个参数可以直接在jade中使用
                } else {
                    res.render('fail',  {
                        result: result
                    });
                }

                connection.release();
            });
        });

    },
    queryById: function (req, res, next) {
        var id = +req.query.id; // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryById, id, function(err, result) {
                jsonWrite(res, result);
                connection.release();

            });
        });
    },
    queryAll: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryAll, function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    }

};