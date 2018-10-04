# sense-ui

```
|-- components/   组件目录
|---- Button/     Button 组件
|---- ...
|---- styles/     样式
|---- index.js    组件入口
|-- doc/          文档中心目录，基于 create-react-app 创建，ejected
|-- scripts/      脚本目录
|-- .babelrc      babel 配置
|-- index.js      入口
|-- package.json
```

- 构建生成目录 build/，内含 es modules，供业务项目单独引入组件
- 样式引入 sass 需要在业务项目中配置 webpack
- 组件库上传到 [bu6仓库](http://npm.bu6.io/)
