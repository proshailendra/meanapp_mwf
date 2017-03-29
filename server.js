const express = require("express"),
    bodyParser = require("body-parser"),
    expressSession= require('express-session'),
    path = require("path"),
    db = require('./server/config/db'),
    webRoutes= require('./server/routes/webRoutes'),
    apiRoutes = require("./server/routes/apiRoutes");

const app = express();

//session
app.use(expressSession({
    secret: 'mytoken',
    saveUninitialized: true,
    resave: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CORS
app.use(function (req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.static(path.join(__dirname, './dist')));
app.use(express.static(path.join(__dirname, './assets')));

app.use("/api", apiRoutes);
app.use("/", webRoutes);

let port = process.env.PORT || 1300;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});