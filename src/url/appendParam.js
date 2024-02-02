/*
 * @Author: tangyuhui 317972442@qq.com
 * @Date: 2024-01-23 00:24:21
 * @LastEditors: tangyuhui 317972442@qq.com
 * @LastEditTime: 2024-01-23 00:28:26
 */
function appendParam(url, param,value) {
    var parts = url.split('?');
    if (parts.length > 1) {
        var query = parts[1].split('&');
        var updatedQuery = [];
        for (var i = 0; i < query.length; i++) {
            var pair = query[i].split('=');
            if (pair[0] === param) {
                pair[1] = value;
            }
            updatedQuery.push(pair.join('='));
        }
        return parts[0] + '?' + updatedQuery.join('&');
    } else {
        return url + '?' + param + '=' + value;
    }
}

module.exports = appendParam;