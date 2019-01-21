let mysql = require('mysql');
let connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    port:'3306',
    database:'test'
})

connection.connect();

connection.query('SELECT * FROM db02',
    function (error,results,flieds) {
        if (error) throw error;
        for (var i =0;i<results.length; i++){
            console.log(
                'Sort -'+results[i].product_origin_sort+
                '/ Name -'+results[i].product_name+
                '/ Sku -'+results[i].product_sku
            );
        }
    }
    )