// 具体操作

const { promisify } = require('util');
// download-git-repo不支持promise方式，容易陷入回调地狱的问题，所以用promisify包裹一层，那么download就能支持promise的使用方式
const download = promisify(require('download-git-repo'));
// const download = require('download-git-repo');

const createProjectAction = async (project) => {
	// clone项目
	await download()

	// 执行npm intall

	// 执行npm run serve

	// 打开浏览器
}

module.exports = {
	createProjectAction
}