#!/usr/bin/env node

// 如何让命令行工具可以使用thinkwhy
// 第一步：
	// 首行写 #!/usr/bin/env node         #! 是一个指令，shebang/hashbang，告诉执行该文件时使用node环境执行
// 第二步：
	// package.json文件中配置 “bin” : { "thinkwhy": "index.js" }，   告诉thinkwhy执行时，实际执行index.js文件
// 第三步：
	// 执行npm link，这样会将package.json文件中配置的bin 和 真正的环境变量env中，做一个链接，然后thinkwhy就可以作为一个终端命令配置到环境变量中（只有环境变量中有thinkwhy之后，才能作为命令执行）


// 如何使用--version、--help 等命令
	// npm install commander 安装commander工具
	// 

const program = require('commander');
// 返回--version 版本号
program.version(require('./package.json').version, '-v, --version, -V');
// program.version('1.0.0');


const helpOptions = require('./lib/core/help');
const createCommands = require('./lib/core/create');

// 帮助可选信息
helpOptions();

// 创建其它指令
createCommands();

// 解析命令行参数
program.parse(process.argv);
// 例如执行thinkwhy -d /src/components，打印 /src/components
console.log(program.opts().dest);