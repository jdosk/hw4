const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var faker = require('faker');
var randomName = faker.name.findName();
var randomDate = faker.date.past();
var randomCompany = faker.company.companyName();

// routes
app.get("/", function(req, res){
    res.render("index.html", {"randomName":randomName, "randomDate":randomDate, "randomCompany":randomCompany});
});

app.get("/dbms", function(req, res){
    res.render("dbms.html", {"randomName":randomName, "randomDate":randomDate, "randomCompany":randomCompany});
});

app.get("/nosql", function(req, res){
    res.render("nosql.html", {"randomName":randomName, "randomDate":randomDate, "randomCompany":randomCompany});
});

app.get("/relational", function(req, res){
    res.render("relational.html", {"randomName":randomName, "randomDate":randomDate, "randomCompany":randomCompany});
});

// server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server...");
});