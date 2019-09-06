const express = require('express');

const Router = express.Router();

const mysql = require('../db/mysql');

// 连接数据库
const mysql = require('mysql');

// 1.创建连接对象，并配置参数
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''  //数据库名
})

// 连接数据库
connection.connect();

//查询数据库
connection.query('select from ')