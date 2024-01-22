
const getFileExtension  = require('../path/getFileExtension')
const retryNetworkRequest = require('../retry/retryNetworkRequest')
const loadResourceWithRetry = require('../loadScript/loadResourceWithRetry')
const getQueryParams = require('../path/getQueryParams')
const appendRetryParam = require('../url/appendRetryParam')

function retry(assetRetryList,options={},callBack){
    const failList= []
    window.addEventListener('error', function (event) {
       const retryOptions = Object.assign({maxAttempts:3,delayBetweenAttempts:1000},options)
        try {
            const target = event.target || event.srcElement;
            if (
                target instanceof HTMLElement &&
                ['LINK', 'SCRIPT'].indexOf(target.nodeName) !== -1
            ) {
                // 下载资源失败
                const failAssert = target.src || target.href;
                // 判断资源参数里是否包含 _retry
                const failQuery=  getQueryParams(failAssert)
                const _retry = failQuery._retry
                const containsIsRetry =  _retry && parseInt(_retry)>= retryOptions.maxAttempts
                console.log("🚀 ~ _retry:", _retry)
                console.log("🚀 ~ failAssert:", failAssert)
                console.log("🚀 ~ failList:", failList)
                // 使用some()方法检查数组中是否有元素包含
                const containsFail = failList.some(function(item) {
                    return failAssert.indexOf(item) !== -1;
                });
                console.log("🚀 ~ containsFail:",containsFail)
                if(containsFail || containsIsRetry){
                    // 阻止继续上报
                    console.log("🚀 :",containsFail,failAssert,containsIsRetry)
                  return
                }{
                    failList.push(failAssert)
                }
                for(let i=0;i<assetRetryList.length;i++){
                    if(failAssert){
                       if(failAssert.indexOf(assetRetryList[i])>=0){
                        const ext = getFileExtension(failAssert)
                        if (ext === 'css' || ext === 'js') {
                            retryNetworkRequest((retryCount) => loadResourceWithRetry(appendRetryParam(failAssert,retryCount)),retryOptions).catch((err) => {
                                callBack && callBack(failAssert,err)
                            })
                        }
                       }
                    } 
                }
            }
        } catch (err) {
            console.log(err)
        }
    }, true);
} 
module.exports = retry