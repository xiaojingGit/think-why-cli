const program = require('commander')

// 创建多个指令

const { createProjectAction } = require('./actions');

const createCommands = () => {

	
	program
		.command('init <project> [others...]')
		.description('clone a repository into a newly created directory: 克隆仓库中的内容到新创建的文件夹中')
		.action((project, others) => {
			// thinkwhy init demo wangjing luoyang
			// 打印：demo [ 'wangjing', 'luoyang' ]
			// 这里的参数和command方法中统一，后面的others一般不用
			console.log(project, others);
			createProjectAction();
		})
}

module.exports = createCommands;