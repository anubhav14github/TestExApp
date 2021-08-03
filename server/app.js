//requires
require('./config/config');
require('./models/db');
require('./models/student.model');
require('./models/admin.model');
require('./models/paper.model')

//imports
const express = require('express');
var app = express();
//const cors = require('cors');
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

//routes
const rtrStudent = require('./routes/route');
const rtrAdmin = require('./routes/route')
const home = require('./routes/home');

//static
const path = require('path');
const static_path = path.join(__dirname, "./public/index")

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
////Enabling CORS
//app.use(cors());

app.use(express.static(static_path));
app.use('/student', rtrStudent);
app.use('/admin', rtrAdmin);
app.use('/', home);

//server
app.listen(process.env.PORT, () => console.log(`server started at port: ${process.env.port}`));
