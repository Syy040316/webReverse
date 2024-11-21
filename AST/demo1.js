const parse = require('@babel/parser')
const fs = require('fs')
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;


process.argv.length > 2 ? File1 = process.argv[2] : File1 = './_encode.js'
process.argv.length > 3 ? File2 = process.argv[2] : File2 = './_decode.js'

jscode = fs.readFileSync(File1, {encoding: 'utf-8'})
let ast = parse.parse(jscode);



// 判断类型是是不是字面量
function isNodeLiteral(node) {
    if (Array.isArray(node)) {
        return node.every(ele => isNodeLiteral(ele));
    }
    if (types.isLiteral(node)) {
        if (node.value == null) {
            return false;
        }
        return true;
    }
    if (types.isBinaryExpression(node)) {
        return isNodeLiteral(node.left) && isNodeLiteral(node.right);
    }
    if (types.isUnaryExpression(node, {
        "operator": "-"
    }) || types.isUnaryExpression(node, {
        "operator": "+"
    })) {
        return isNodeLiteral(node.argument);
    }

    if (types.isObjectExpression(node)) {
        let {properties} = node;
        if (properties.length == 0) {
            return true;
        }

        return properties.every(property => isNodeLiteral(property));

    }
    if (types.isArrayExpression(node)) {
        let {elements} = node;
        if (elements.length == 0) {
            return true;
        }
        return elements.every(element => isNodeLiteral(element));
    }

    return false;
}

const CalcCallExpression = {
}
traverse(ast, {
    FunctionDeclaration(path){
        let {node, parentPath}  = path

        let { id , body} = node
        let len = body.body.length
        if (!types.isReturnStatement(body.body[len-1])){
            return
        };

        const binding = parentPath.scope.getBinding(id.name);
        console.log(binding.constant);
        if (!binding || !binding.constant){
            return
        }
        if (!binding.referenced && !path.parentPath.isProgram()){
            path.remove()
            return
        }

        let sourceCode = path.toString()
        if (sourceCode.includes("try") || sourceCode.includes("random") || sourceCode.includes("Date")) {
            //返回值不唯一不做处理
            return;
        }
        eval(sourceCode)

        try {
            let canremoval = true
            for (const referPath of binding.referencePaths) {
                console.log(referPath.toString());
                let {node, parentPath} = referPath
                if (! parentPath.isCallExpression({"callee": node})) {

                    canremoval = false
                    continue
                }

                let arguments = parentPath.node.arguments
                if (arguments.length == 0 || !isNodeLiteral(arguments)){

                    canRemoved = false;
                    continue;
                }


                console.log((parentPath.toString()));
                let value = eval(parentPath.toString())

                if (typeof  value == 'function' || typeof value == 'undefined'){

                    canremoval = false
                    continue
                }
                console.log(parentPath.toString() + '--> ' + value);
                parentPath.replaceWith(types.valueToNode(value))
            }

            canremoval && path.remove();
        } catch (e){}



    }
});

let {code} = generator(ast);
console.log(code);
fs.writeFile(File2, code, (err) => {
});
