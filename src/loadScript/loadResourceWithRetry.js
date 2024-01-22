const getFileExtension  = require('../path/getFileExtension')


/*
 * @description: 重新加载静态资源，支持css、js
 * @author: tangyuhui
 * @date: 2023-12-05 10:33:09
 */
function loadResourceWithRetry(url) {
	console.log("🚀 ~ loadResourceWithRetry ~ loadResourceWithRetry:", url)
	const extension = getFileExtension(url)
	const elementType = extension === 'css' ? 'link' : 'script'
	return new Promise((resolve, reject) => {
		// 创建一个新的资源元素
		const resource = document.createElement(elementType)
		if (elementType === 'link') {
			resource.href = url
		} else {
			// 默认是js
			resource.src = url
			resource.type = 'text/javascript'
			resource.async = true
		}
		// 监听资源加载成功的事件
		resource.onload = function() {
			console.log('onload', url)
			resolve()
		}
		// 监听资源加载失败的事件
		resource.onerror = function() {
			console.log(url)
			reject(new Error(`Error loading script: ${url}`))
		}
		// 将资源元素添加到文档中
		document.head.appendChild(resource)
	})
}

module.exports =  loadResourceWithRetry;