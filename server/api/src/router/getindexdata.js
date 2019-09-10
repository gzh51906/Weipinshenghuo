const express = require('express');
const Router = express.Router();
const {
    find,
    remove,
    update,
    insert,
} = require('../db/mongo');
const {
    formatData
} = require('../utils');



//查找所有商品
Router.post('/', async (req, res) => {

    let data = await find('index');
    res.send(formatData({
        data
    }))
})


module.exports = Router;