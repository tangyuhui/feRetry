
/*
 * @description: 添加重试参数
 * @author: tangyuhui
 * @date: 2024-01-22 22:44:28
*/
function addOrUpdateRetryParam(url) {
    // 检查 URL 是否已经包含 retry 参数
    const retryRegex = /([?&])_retry=([0-9]+)/;
    const match = url.match(retryRegex);

    if (match) {
        // 如果找到 retry 参数，增加它的值
        const currentRetryCount = parseInt(match[2], 10);
        const newRetryCount = currentRetryCount + 1;
        return url.replace(retryRegex, match[1] + '_retry=' + newRetryCount);
    } else {
        // 如果没有找到 retry 参数，添加参数
        const separator = url.includes('?') ? '&' : '?';
        return url + separator + '_retry=' + 1;
    }
}

module.exports = addOrUpdateRetryParam;