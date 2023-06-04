const express = require("express");
const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        database: "che-db",
        password: "admin"
    }
);

connection.connect(function(err)
    {
        if (err) 
        {
            return console.error("Ошибка: " + err.message);
        }
        else
        {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    }
);
 
const app = express();
app.use(express.json());

app.get("/api/points", function(req, res){
    connection.query("select * from points left join routes on points.id_route = routes.id", (err, results, fields) =>
    {
        res.send(results);
    });
});

app.get("/api/points/:id", function(req, res){
    connection.query("select * from points where id_route = " + req.params.id + " order by number", (err, results, fields) =>
    {
        res.send(results);
    });
});

app.get("/api/routes", function(req, res){
    connection.query("select * from routes", (err, results, fields) =>
    {
        res.send(results);
    });
});

app.get("/api/objects", function(req, res){
    connection.query("select * from objects", (err, results, fields) =>
    {
        res.send(results);
    });
});

app.get("/api/objects/:id", function(req, res){
    connection.query("select * from objects where id = " + req.params.id, (err, results, fields) =>
    {
        res.send(results);
    });
});

app.post("/api/contacts", function(req, res){
    connection.query('insert into contacts values(null, "' + req.body.name + '", "' + req.body.phone + '", "' + req.body.email + '", "' + req.body.route + '")',
    (err, results, fields) =>
    {
        console.log(err);
        console.log(results);
    });
});

app.use(express.static(__dirname + "/public"));
 
app.use("*", express.static("./public/404.html"));
 
app.listen(3000);