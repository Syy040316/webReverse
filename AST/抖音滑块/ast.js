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

syy_count= 0
funNameArray = []
codes = ''
function savePath(path){
    if (types.isUnaryExpression(path.parentPath )){
        codes += `${path.parentPath} \r\n`
        path.parentPath.remove()

    }
    else{
        fakeFunName = 'syy' + syy_count
        syy_count += 1
        if(path.node.callee.id == undefined){
            path.node.callee.id = types.identifier(fakeFunName)
        }



        codes += `${path} \r\n`
        path.remove()
    }

}
function recordCallFunName(path){
    let {callee, arguments} = path.node
    if (

        callee.body == undefined ||
        callee.body.body[0] == undefined ||
        callee.body.body[0].init == undefined ||
        callee.body.body[0].init.declarations == undefined ||
        callee.body.body[0].init.declarations[0] == undefined ||
        callee.body.body[0].init.declarations[0].init == undefined
        // callee.body.body[0].init.declarations[0].init.name == undefined ||
        // callee.body.body[0].init.declarations[0].init.name != 2

    ){return }
    let funName1 = callee.body.body[0].init.declarations[0].init.name
    if (arguments == undefined ||
        arguments.length != 1 ||
        arguments[0].name == undefined ||
        arguments[0].name.length != 2
    ){return}

    let funName2 = arguments[0].name
    funNameArray.push(funName1)
    funNameArray.push(funName2)
    savePath(path)
}

const recordCallFunName_traverse = {
    CallExpression : {enter:[recordCallFunName]}
}
traverse(ast, recordCallFunName_traverse)
console.log(funNameArray);



function recordFunName(path){
    let {id} = path.node
    let funName = id.name
    // if(funName == "vb"){
    //     console.log(funName);}
    if (!funNameArray.includes(funName)){return}
    codes += `${path} \r\n`
    path.remove()
}

const recordFunName_traverse = {
    FunctionDeclaration : {enter:[recordFunName]}
}

traverse(ast, recordFunName_traverse);

function replaceFunName(path){
    let node = path.node
    varName = node.id.name
    funName = node.init.name
    if (!funName.includes(funName)){return}


}


const replaceFunName_traverse = {
    VariableDeclarator : {enter:[replaceFunName]}
}

traverse(ast, replaceFunName_traverse);









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