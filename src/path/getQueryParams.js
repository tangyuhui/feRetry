function getQueryParams(url) {
    // 提取 URL 的查询字符串部分
    let queryString = url.split('?')[1] || '';

    // 将查询字符串分割成单独的参数
    let pairs = queryString.split('&');

    // 解析每对参数，并存储在对象中
    let params = {};
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i].split('=');
        let key = decodeURIComponent(pair[0]);
        let value = decodeURIComponent(pair[1] || '');
        params[key] = value;
    }

    return params;
}

module.exports = getQueryParams;