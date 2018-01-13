// dao/userSqlMapping.js
// CRUD SQL语句
var user = {
    // insert:'INSERT INTO register(id, username, password) VALUES(?,?,?)',
    insert:'INSERT INTO register SET ?',
    update:'update register set name=?, age=? where id=?',
    delete: 'delete from register where id=?',
    queryById: 'select * from register where id=?',
    queryAll: 'select * from register'
};
console.log("数据库结果");
module.exports = user;