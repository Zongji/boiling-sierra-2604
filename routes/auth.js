var express = require('express');
var request = require('request');
var Geetest = require('../gt-sdk');
var router = express.Router();

var pcGeetest = new Geetest({
    geetest_id: '50ab7eefc54c07f7e9116c7e8679f25d',
    geetest_key: '59b368f9ee70c5eb64c9c1d06a160583'
});
var data = {title:"Auth"};


/* GET auth listing. */
router.get('/', function(req, res, next) {
	res.render('auth',data);
});

//验证码注册
router.get("/register", function (req, res) {
    // 向极验申请每次验证所需的challenge
    pcGeetest.register(function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        if (!data.success) {
            // 进入 failback，如果一直进入此模式，请检查服务器到极验服务器是否可访问
            // 可以通过修改 hosts 把极验服务器 api.geetest.com 指到不可访问的地址

            // 为以防万一，你可以选择以下两种方式之一：

            // 1. 继续使用极验提供的failback备用方案
            res.send(data);
            // 2. 使用自己提供的备用方案
            // todo
        } else {
            // 正常模式
            res.send(data);
        }
    });
});

//表单验证
router.post("/validate", function (req, res) {

    // 对ajax提供的验证凭证进行二次验证
		var formdata = {
        challenge: req.body.geetest_challenge,
        validate: req.body.geetest_validate,
        seccode: req.body.geetest_seccode
    };

    pcGeetest.validate(formdata, function (err, success) {
        if (err) {
            // 网络错误
            res.send({
                status: "error",
                info: err
            });
        } else if (!success) {
            // 二次验证失败
            res.send({
                status: "fail",
                info: '登录失败'
            });
        } else {
            res.send({
                status: "success",
                info: '登录成功'
            });
        }
    });
});


router.post("/form-validate", function (req, res) {

    // 对form表单提供的验证凭证进行验证
    var data = {};
    pcGeetest.validate({

        challenge: req.body.geetest_challenge,
        validate: req.body.geetest_validate,
        seccode: req.body.geetest_seccode
    }, function (err, success) {
        if (err) {
            // 网络错误
            data.result = err;
        } else if (!success) {
            // 二次验证失败
            data.result = "<h1 style='text-align: center'>登录失败</h1>";
        } else {
            data.result = "<h1 style='text-align: center'>登录成功</h1>";
        }
        res.json(data);
    });
});


module.exports = router;
