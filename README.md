# SuperTool-Server

> 基于Koa+MongoDB的SuperTool后端服务

## 预览

### [在线预览](https://igonglei.github.io/super-tool/)

## 技术栈

- Koa
- Koa-views
- Koa-router
- EJS
- Mongoose
- ES6
- async/await

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
│   └── index.ejs
├── static
│   ├── favicon.ico
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
