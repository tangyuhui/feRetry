function getFileExtension(url) {
	let pathname;
    try {
        // 尝试将输入解析为 URL
        const urlObject = new URL(url);
        pathname = urlObject.pathname;
    } catch (e) {
        // 如果解析失败，假设输入是文件名
        pathname = url;
    }

    // 获取后缀
    const lastDotIndex = pathname.lastIndexOf('.');
    return lastDotIndex !== -1 ? pathname.substring(lastDotIndex + 1) : '';
}


module.exports = getFileExtension;