const files     = require('fs');  //导入文件库，防止与fs变量名冲突
const types     = require("@babel/types");
const parser    = require("@babel/parser");
const template  = require("@babel/template").default;
const traverse  = require("@babel/traverse").default;
const generator = require("@babel/generator").default;
const NodePath  = require("@babel/traverse").NodePath; //智能提示所需

//js混淆代码读取
const encodeFile = process.argv.length > 2 ? process.argv[2] : "./encode.js";  //默认的js文件
const decodeFile = process.argv.length > 3 ? process.argv[3] : encodeFile.slice(0, encodeFile.length - 3) + "_ok.js";


//将源代码解析为AST
let sourceCode = files.readFileSync(encodeFile, { encoding: "utf-8" });
let ast = parser.parse(sourceCode);
console.time("处理完毕，耗时");












const simplifyLiteral = {
	/**  @param  {NodePath} path */  //每个插件前都要加哈。
	NumericLiteral(path) {
		let {node} = path;
		if (node.extra && /^0[obx]/i.test(node.extra.raw)) {
			node.extra = undefined;
		}
	},
	/**  @param  {NodePath} path */
	StringLiteral(path) {
		let {node} = path;
		if (node.extra && /\\[ux]/gi.test(node.extra.raw)) {
			node.extra = undefined;
		}
	},
}


//traverse(ast, simplifyLiteral);


console.timeEnd("处理完毕，耗时");
let { code } = generator(ast, opts = {
	"compact": false,  // 是否压缩代码
	"comments": false,  // 是否保留注释
	"jsescOption": { "minimal": true },  //Unicode转义
});

files.writeFile(decodeFile, code, (err) => { });