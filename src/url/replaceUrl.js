/*
 * @Author: tangyuhui 317972442@qq.com
 * @Date: 2024-01-23 00:24:21
 * @LastEditors: tangyuhui 317972442@qq.com
 * @LastEditTime: 2024-01-23 01:18:00
 */
function replaceUrl(assetKv,currentUrl) {
    for (let key in assetKv) {
        var regex = new RegExp(key, 'g');
        if (regex.test(currentUrl)) {
            return currentUrl.replace(regex, assetKv[key]);
        }
    }
    return currentUrl;
}

module.exports = replaceUrl;