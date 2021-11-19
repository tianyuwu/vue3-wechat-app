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
修改.env中设置的后端接口的域名
```
VITE_API_HOST=http://yourdomain.com
```
启动开发Server
```
yarn dev
```
## 迭代计划

- [x] 微信授权登录流程 
- [x] 微信图文分享
- [ ] 微信支付
### 微信授权登录如何实现

查看该文[微信授权登录流程详细分析](https://segmentfault.com/a/1190000040649617?_ea=162710050)

### 如何配置微信图文分享
```
import { useWxShare } from '@/hooks/useWxShare'

export default defineComponent({
  mounted() {
    // 以下内容替换为自己的
    useWxShare({
      title: '这是微信分享标题',
      desc: '这是微信分享描述描述',
      imgUrl: 'http://imgurl.com/img.png',
    })
  },
})
```

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