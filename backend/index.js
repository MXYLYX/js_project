
// const { response } = require('express');
const express = require('express');
// const { request } = require('http');
// 5. 导入querystring模块（用来解析post请求参数）
var querystring = require('querystring');
var fs = require('fs'); 
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, './frontend'))); 

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

app.get('/axios', (request, response) =>{
    console.log('headers: ', request.headers);
    // response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 当带有Access-Control-Allow-Credentials时 Access-Control-Allow-Origin不能为*
    response.setHeader('Access-Control-Allow-Credentials', true); 
    console.log(request.headers);
    // query只适用于get
    console.log(`测试cookie`);
    if(!request.query.name){
        console.log(`不包含name`);
    }else{
        console.log(request.query.name);
    }

    response.send('hello axios jquert get');
});


// const https = require('https')
// https.createServer(app).listen(443)

app.listen(process.env.PORT || 80, ()=>{
    console.log(`启动监听`);
});

