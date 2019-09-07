const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils');
Router.post('/',async (req,res)=>{
    let {username,password} = req.body;
    console.log(username);
    
    let result;
    try {
        let data ;
        data = await mysql(`SELECT * FROM useinfo where username = '${username}'`);
        // console.log(data,5555);
    //    判断用户登录情况
        if(data[0]){
            let pwd = data[0].password;
            console.log(pwd,password);
            if(pwd == password){
                res.send({code:1,msg:''})
            }else{
                res.send({code:0,msg:'密码错误'})
            }
        }else{
            res.send({code:0,msg:'用户名未注册'})
        }
       
    }catch(err){
        result = {code : 0}
    }
    
    
    
    // res.send(result)
    // if((result.data.spe.join('') == '')){
    //     res.send('用户名不存在')
    // }else{
    //     let psw = result.data.spe[0].password;
    //     console.log(psw,password);
    //     if(psw == password){
    //         res.send('登陆成功')
    //     }else{
    //         res.send('密码错误');
    //     }
    // }
})
module.exports = Router;