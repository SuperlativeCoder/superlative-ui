# superlative-ui

```
|-- build/        babel编译后的组件目录
|-- components/   组件目录
|---- Button/     Button 组件
|---- ...
|---- styles/     样式
|---- index.js    组件入口
|-- dist/         webpack打包目录
|-- scripts/      脚本目录
|-- .babelrc      babel 配置
|-- index.js      入口
|-- package.json
```

- 构建生成目录 build/，内含 es modules，供业务项目单独引入组件
- 样式引入 sass 需要在业务项目中配置 webpack
