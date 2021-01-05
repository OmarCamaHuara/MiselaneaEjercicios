var mysql = require('mysql');
module.exports = function(){
    return mssql.createConnection({
        host: 'hocalhost',
        user: 'root',
        password:'',
        database:'projeto_node'
    });
}