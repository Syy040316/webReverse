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
const decodeFun = process.argv.length > 3 ? process.argv[3] : "decodeFun.js";

//将源代码解析为AST
let sourceCode = files.readFileSync(encodeFile, { encoding: "utf-8" });
let ast = parser.parse(sourceCode);
console.time("处理完毕，耗时");
flag = true

BIN_NODE = template(`!A`);

funNameArray = []
codes = ''
function savePath(path){
    if (types.isUnaryExpression(path.parentPath )){
        codes += `${generator(path.parentPath.node).code} \r\n`
        path.parentPath.remove()

    }
    else{

        newPath = BIN_NODE({
            A: path.node

        });
        newPath = generator(newPath)
        if (flag){
            console.log(newPath.code);
            console.log(generator(path.node).code);
            flag = false

        }

        codes += `${newPath.code} \r\n`
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
    console.log(`funName1 -> ${funName1};  funName2 -> ${funName2}`);
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
    codes += `${generator(path.node).code} \r\n`
    path.remove()
}


const recordFunName_traverse = {
    FunctionDeclaration : {enter:[recordFunName]}
}

traverse(ast, recordFunName_traverse);

function replaceFunName1(path){
    let {node, scope} = path
    varName = node.id.name
    if (node.init == undefined ||
        node.init.name == undefined
    ){return }
    funName = node.init.name
    if (!funNameArray.includes(funName)){return}
    scope.rename(varName, funName)
    path.remove()

}
function replaceFunName2(path){
    let {node, scope} = path
    varName = node.left.name
    funName = node.right.name
    operator = node.operator
    if (!operator == "=" || !funNameArray.includes(funName)){return }
    scope.rename(varName, funName)
    path.replaceWith(types.identifier(funName))


}

const replaceFunName_traverse = {
    VariableDeclarator : {enter:[replaceFunName1]},
    AssignmentExpression : {enter:[replaceFunName2]},
}

traverse(ast, replaceFunName_traverse);
eval(codes)
function evalFun(funName,value){

    let code = `${funName}(${value})`
    evalRet = eval(code)
    console.log(evalRet);
    return evalRet
}
function calCallExpression(path){
    node = path.node
    funName = node.callee.name
    if (!funNameArray.includes(funName)){return}
    arg = node.arguments[0].value
    evalRet = evalFun(funName, arg)
    path.replaceWith(types.valueToNode(evalRet))

}

const CallExpression_traverse = {
    CallExpression : {enter:[calCallExpression]},

}

traverse(ast, CallExpression_traverse);


function amendLiteral(path){
    console.log(path.toString())
    const {confident,value} = path.evaluate();
    confident && path.replaceWith(types.valueToNode(value));
}

// const amendLiteral_traverse = {
//     BinaryExpression : {enter:[amendLiteral]},
//
// }
//
// traverse(ast, amendLiteral_traverse);


function containsSequenceExpression(path) {
    let containsSequence = false;
    // 深度优先遍历当前路径及其所有子路径
    path.traverse({
        SequenceExpression(_path) {
            containsSequence = true;
            _path.stop(); // 找到逗号表达式后立即停止遍历
        }
    });
    return containsSequence;
}

//请使用学员专版babel库
const constantFold = {
    "BinaryExpression|UnaryExpression"(path) {
        if (containsSequenceExpression(path)) {
            return;
        }
        if (path.isUnaryExpression({ operator: "-" }) ||
            path.isUnaryExpression({ operator: "void" })) {
            return;
        }

        const { confident, value } = path.evaluate();

        if (!confident || typeof value == "function")
            return;


        if (typeof value == 'number' && (!Number.isFinite(value))) {
            return;
        }

        console.log(path.toString(), "--->", value);

        path.replaceWith(types.valueToNode(value));
    },
}

traverse(ast, constantFold);

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
files.writeFile(decodeFun, codes, (err) => { });
console.log(eval('US(458)'));