# SuperTool-Server

> 基于Vue.js的辅助运维工具

## 预览

### [在线预览](https://igonglei.github.io/super-tool/)

## 技术栈

- Koa
- Koa-router
- Mongoose
- Koa-static
- Koa-logger
- @Koa/cors
- Koa-bodyparser
- Koa-compress
- ES6

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
├── static
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
