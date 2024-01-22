/*
 * @Author: tangyuhui 317972442@qq.com
 * @Date: 2024-01-23 00:24:21
 * @LastEditors: tangyuhui 317972442@qq.com
 * @LastEditTime: 2024-01-23 00:28:26
 */
function appendParam(url, param,value) {
    var separator;
    if (url.indexOf('?') !== -1) {
        separator = '&';
    } else {
        separator = '?';
    }
    return url + separator + param+ '=' + value;
}

module.exports = appendParam;