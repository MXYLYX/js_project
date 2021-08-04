
// const { response } = require('express');
const express = require('express');
// const { request } = require('http');
// 5. 导入querystring模块（用来解析post请求参数）
var querystring = require('querystring');
var fs = require('fs');  

const app = express();

app.get('/', (request, response) =>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // console.log(request);
    // query只适用于get
    console.log(`打印`);
    fs.readFile('../frontend/index.html',function(err,data){  
        if(err){  
            throw err;  
        }  
        response.end(data);  
    });  

});

const https = require('https')
// https.createServer(app).listen(443)

app.listen(80, ()=>{
    console.log(`启动监听`);
});

