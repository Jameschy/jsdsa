var mysql  = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',//数据库远程或本地路由
    user     : 'root',//数据库用户名
    password : 'root',//数据库密码
    port     :'3306',//端口（本地可省）
    database : 'test' //数据库名称
});

connection.connect();

connection.query('SELECT * from db02', //db01数据表名
    function (error, results, fields) {
    if (error) throw error;
    for(var i=0;i<results.length;i++){
        console.log('Sort--'+results[i].product_sort+'/ Name--'+results[i].product_name+'/ Category--'+results[i].product_category);
    }
    //console.log(results)
});