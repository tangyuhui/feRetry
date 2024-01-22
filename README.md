<!--
 * @Author: tangyuhui 317972442@qq.com
 * @Date: 2024-01-22 21:23:38
 * @LastEditors: tangyuhui 317972442@qq.com
 * @LastEditTime: 2024-01-23 01:09:31
-->
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
 

 ### 如果不希望某个url重试
 + 方法 1：可以在 url 后面添加_notRetry=true.    例如 www.baidu.com?_notRetry=true
 + 方法 2：可以设置一个足够大的重试次数值，大于调用参数时设置的 maxAttempts。 例如 www.baidu.com?_retry=9999
 + 方法 3：assetRetryList中限定足够小且精准的范围。譬如assetRetryList = ["需要捕捉错误的 url全路径”]. 不在这个范围内的静态资源将不会被捕捉。