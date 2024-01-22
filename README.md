# feRetry
前端资源加载异常重试库
 
 
## :building_construction:  安装使用
1. 直接下载`dist`目录下的[fe-retry.min.js](https://github.com/tangyuhui/feRetry/blob/master/dist/fe-retry.min.js)使用，支持UMD通用模块规范  
2. 使用npm安装


### 浏览器
 可以将 [fe-retry.min.js ](https://github.com/tangyuhui/feRetry/blob/master/dist/fe-retry.min.js) 直接内联到 `<head>` 标签中，并置于**所有资源开始加载之前**。
``` html
  <script>fe-retry.min.js内容</script>
  <script type="text/javascript">
     const assetRetryList = ['xxx.com.cn','localhost','127.0.0.1']
            // 只要匹配到列表中的资源错误，就重试。支持重试3次
     feRetry(assetRetryList,{maxAttempts:3,delayBetweenAttempts:1000})
  </script>
```
 

### npm:
``` bash
$ npm install --save-dev feRetry
```

webpack、RequireJS、SeaJS等
``` javascript
// 完整引入
import feRetry from 'feRetry'
const assetRetryList = ['xxx.com.cn','localhost','127.0.0.1']
            // 只要匹配到列表中的资源错误，就重试。支持重试3次
feRetry(assetRetryList,{maxAttempts:3,delayBetweenAttempts:1000})
```
 