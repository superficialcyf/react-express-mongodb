const express = require('express');
const bodyParser = require('body-parser');
const Interviews = require('../db/models/InterviewModel');

const mongoose = require('../db/config/mongoose');
const db = mongoose();
const app = express();
// 通过如下配置再路由种处理request时，可以直接获得post请求的body部分
//get请求从req.query中获得，post请求从req.body中获取
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = express.Router();

app.use('/interview/searchInterview',(req,res)=>{
    let path = req.query.type;
    let Type = {'type':''};
    switch (path) {
      case 'cssinterview':Type.type = 'css';break;
      case 'jsinterview':Type.type = 'js';break;
      case 'vueinterview':Type.type = 'vue';break;
      case 'reactinterview':Type.type = 'react';break;
      case 'httpinterview':Type.type = 'http';break;
    }
    
    Interviews.find(Type,(err,data)=>{
      if(err){
        next(err);
        res.json(data);
      }else{
        res.json(data);
      }
    })
}); 
app.use('/interview/addInterview',(req,res,next)=>{
  const time = new Date();
  req.body['time'] = time.toLocaleString();
  Interviews.insertMany(req.body,(err,data)=>{ 
    if(err){
      next(err);
      res.json([{code:1,msg:'添加失败'}]);
    }else{
      res.json([{code:0,msg:'添加成功'}]);
    }
  })
})

app.listen(3003, () => {
  console.log('node server is listening 3003');
});
