/*
 * @Author: tangyuhui 317972442@qq.com
 * @Date: 2024-01-22 21:23:38
 * @LastEditors: tangyuhui 317972442@qq.com
 * @LastEditTime: 2024-01-23 00:14:16
 */
const delay  = require('../delay/delay')

/*
 * @description:延时重试，默认1秒后重试，共重试3次
 * @author: tangyuhui
 * @date: 2023-11-27 13:50:23
 */
function retryNetworkRequest(request, options = {}) {
    return new Promise((resolve, reject) => {
        const maxAttempts = options.maxAttempts || 3
        const delayBetweenAttempts = options.delayBetweenAttempts || 1000
        let attempts = 0

        const tryRequest = async() => {
            attempts++
            try {
                const response = await request(attempts)
                resolve(response)
            } catch (error) {
                if (attempts === maxAttempts) {
                    reject(error)
                } else {
                    await delay(delayBetweenAttempts)
                    tryRequest()
                }
            }
        }

        tryRequest()
    })
}
module.exports = retryNetworkRequest;