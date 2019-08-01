const express = require('express')
const axios = require('axios')
const app = express()

// 获取首页API接口
app.get('/index/index', (req, succeed) => {
  axios.get('https://miniapp.you.163.com/xhr/index/index.json').then(res => {
    succeed.send(res.data)
    succeed.end()
  })
})

// 获取为你推荐商品
app.get('/rcmd/index/:lastid/:size', (req, succeed) => {
  let { lastid, size } = req.params
  axios.get(`https://miniapp.you.163.com/xhr/rcmd/index.json?lastItemId=${lastid}&size=${size}`).then(res => {
    succeed.send(res.data)
    succeed.end()
  })
})

// 获取一级分类
app.get('/list/categorySimple', (req, succeed) => {
  axios.get(`https://miniapp.you.163.com/xhr/list/categorySimple.json`).then(res => {
    succeed.send(res.data)
    succeed.end()
  })
})

// 获取二级分类
app.get('/list/categorySimple/:cateid', (req, succeed) => {
  let { cateid } = req.params
  axios.get(`https://miniapp.you.163.com/xhr/list/subCate.json?categoryId=${cateid}`).then(res => {
    succeed.send(res.data)
    succeed.end()
  })
})

// 获取二级分类下的商品
app.get('/list/categorySimple/:categoryL1Id/:categoryL2Id', (req, succeed) => {
  let { categoryL1Id, categoryL2Id } = req.params
  axios.get(`https://miniapp.you.163.com/xhr/list/l2Items2.json?categoryL1Id=${categoryL1Id}&categoryL2Id=${categoryL2Id}`).then(res => {
    succeed.send(res.data)
    succeed.end()
  })
})

app.listen(3000, () => {
  console.log('Server is Running... @ http://localhost:3000')
})
