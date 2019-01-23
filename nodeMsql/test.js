var mysql  = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',//数据库远程或本地路由
    user     : 'root',//数据库用户名
    password : 'root',//数据库密码
    port     :'3306',//端口（本地可省）
    database : 'test' //数据库名称
});

connection.connect();

connection.query('SELECT * from db01', //db01数据表名
    function (error, results, fields) {
    if (error) throw error;
    for(var i=0;i<results.length;i++){
        console.log('Sort--'+results[i].product_sort+'/ Name--'+results[i].product_name+'/ Category--'+results[i].product_category);
    }
    //console.log(results)
});

//From :
// 1.https://blog.csdn.net/u012475786/article/details/72621257
// 2.https://blog.csdn.net/zxc123e/article/details/53232409
// 3.https://blog.csdn.net/qq_31070475/article/details/65042912
// 5.https://blog.csdn.net/kuangshp128/article/details/75074704
// 6.http://nodejs.cn/api/async_hooks.html

// 测试方法：
// 1保持本地数据库开启；
// 2确认本地数据表db01有参数；
// 3使用Terminal命令或cmd命令====>node test.js