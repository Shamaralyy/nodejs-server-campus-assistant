const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log('req.body', req.body);
    const body = req.body;
    if (req.body.username !== 'admin' || req.body.password !== '123456') {
        return res.send({ status: 1, msg: '登录失败' })
    }
    
    req.session.user = req.body;  //用户信息
    req.session.isLogin = true;  // 用户登录状态
    console.log(req.session);

    res.send({
        status: 0,
        msg: 'POST请求成功！',
        data: body
    })
})

router.get('/userInfo',(req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log('userinfo-req.session',req.session);
    if(!req.session.isLogin) {
        return res.send({status:1 ,msg: 'fail'})
    }
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username
    })
})

router.get('/logout',(req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    req.session.destroy();
    res.send({
        status: 0,
        msg: '退出登录成功'
    })
})

module.exports = router;