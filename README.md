# SuperTool-Server

> 基于Koa+MongoDB的SuperTool后端服务

## 前端

### [项目地址](https://github.com/igonglei/super-tool) [在线预览](https://igonglei.github.io/super-tool/)

## 预览

### 接口列表
<p>
  <img src="https://raw.githubusercontent.com/igonglei/super-tool-server/master/screenshots/api.png">
</p>

## 技术栈

- Koa
- Koa-router
- Koa-hbs
- Handlebars.js
- Mongoose
- Swagger UI
- ES6
- async/await

## 项目配置

```
const config = {
  development: {
    port: 3000,
    mongoUri: 'mongodb://localhost:30000/supertool-dev',
    prefix: '/api/v1'
  },
  production: {
    port: 3000,
    mongoUri: 'mongodb://localhost:30000/supertool',
    prefix: '/api/v1'
  }
}
```

## MongoDB

- 数据库请按照mongoUri配置
- 导入static\data目录下的logs.json和visits.json文件，表名同文件名

## 项目结构
```
.
├── config
│   └── index.js
├── controllers
│   ├── log.js
│   └── visit.js
├── db
│   └── index.js
├── models
│   ├── log.js
│   └── visit.js
├── routes
│   ├── index.js
│   ├── log.js
│   └── visit.js
├── utils
│   └── index.js
├── views
│   ├── index.hbs
│   ├── layout.hbs
│   └── swagger.hbs
├── screenshots
│   └── api.png
├── static
│   ├── favicon.ico
│   ├── css
│   │   ├── base.css
│   │   └── index.css
│   ├── swagger
│   └── data
│       ├── logs.json
│       └── visits.json
├── app.js
├── package.json
└── README.md
```

## Build Setup

``` bash
# install dependencies
npm install

# development
npm run dev

# production
npm start
```
