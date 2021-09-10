# vite-vue3-mp 使用Vue3+Typescript+Vite的微信公众号开发示例应用

## 特性
- 集成微信授权登录和微信分享
- Typescript支持
- Axios请求封装
- Vue Router的数据持久化
- vite相关：接口代理，路径别名，读取环境变量

## 如何使用
克隆本项目并进入项目根目录
```
git clone https://github.com/tianyuwu/vue3-wechat-app.git
cd vue3-wechat-app
```
安装依赖
```
yarn
```
启动开发Server
```
yarn dev
```
## 迭代计划

- [x] 微信授权登录流程 
- [x] 微信图文分享
- [ ] 微信支付

## 依赖
```
{
  "axios": "^0.21.4",
  "vue": "^3.2.6",
  "vue-router": "^4.0.11",
  "vuex": "^4.0.2",
  "weixin-js-sdk-ts": "^1.6.1",
  "vuex-persistedstate": "^4.0.0"
}
```