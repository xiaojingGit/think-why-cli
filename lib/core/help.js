const program = require('commander');

const helpOptions = () => {
	// 增加自己的options
	program.option('-w --why', 'a thinkwhy cli');

	// 设置目标文件夹
	program.option('-d --dest <dest>', 'a destination folder，例如：-d /thinkwhy/components')

	// 监听--help执行
	program.on('--help', function() {
		console.log('');
		console.log('Others: ');
		console.log(' other options~');
	})
}

module.exports = helpOptions