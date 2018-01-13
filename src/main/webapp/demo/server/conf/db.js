// conf/db.js
// MySQL数据库联接配置
module.exports = {
    mysql: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database:'project', // 前面建的register表位于这个数据库中
        port: 3306
    }
};
console.log("数据库配置");
// connection.connect();