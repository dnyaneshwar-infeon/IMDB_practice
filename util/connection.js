const mysql=require('mysql2');
const con=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"7875",
    database:"practice"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Database Connected");
});

module.exports=con;