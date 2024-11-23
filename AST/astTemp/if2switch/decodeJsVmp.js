const fs = require('fs');
const parser    = require("@babel/parser");
const traverse  = require("@babel/traverse").default;
const types     = require("@babel/types");
const generator = require("@babel/generator").default;



//将源代码解析为AST
process.argv.length > 2 ? encodeFile = process.argv[2]: encodeFile ="./encode.js";
process.argv.length > 3 ? decodeFile = process.argv[3]: decodeFile ="./decode_result.js";


let sourceCode = fs.readFileSync(encodeFile, {encoding: "utf-8"});
let ast    = parser.parse(sourceCode);


function getSwitchhNode(name,scope)
{
	let switchBolck = [];
	
	scope.traverse(scope.block,{
			IfStatement(path)
			{
				let {test,consequent,alternate} = path.node;
				let testPath = path.get('test');

				if (!testPath.isBinaryExpression())
				{
					let multiNode = [];
					testPath.traverse(
					{
						BinaryExpression({node})
						{
							let {left,operator,right} = node;
				      if (!types.isNumericLiteral(left) ||operator != "==" || 
				         !types.isIdentifier(right,{name:name}))
				      {
				        return;
				      }	
				      if (multiNode.length == 0)
				      {

				      	if (!types.isReturnStatement(consequent.body[consequent.body.length-1]))
				      	{
				      		consequent.body.push(types.BreakStatement());
				      	}
				      	
				      	multiNode = [types.SwitchCase(left,consequent.body)];
				      }		
				      else
				      {
				      	multiNode.unshift(types.SwitchCase(left,[]));
				      }			
						}
					})
					switchBolck.push(...multiNode);
				}
				else
				{
					let {left,operator,right} = test;
				  if (!types.isNumericLiteral(left) ||operator != "==" || 
				      !types.isIdentifier(right,{name:name}))
				  {
				  	return;
				  }	
				  if (!types.isReturnStatement(consequent.body[consequent.body.length-1]))
				  {
				  	consequent.body.push(types.BreakStatement());
				  }
				  let switchCaseNode = types.SwitchCase(left,consequent.body);
				  switchBolck.push(switchCaseNode);				
				}
			}
			})
	
	return 	switchBolck;
}




const ifToSwitch = 
{
	FunctionDeclaration(path)
	{
		let {scope,node} = path;
		let {id,params,body} = node;
		if (!types.isIdentifier(id,{name:"__V"}) ||
		    params.length != 5)
		{
			return;
		}
		
		let name     = "__U";
		let switchId = types.Identifier(name);
		let switchBolck = getSwitchhNode(name,scope);
		
		if (switchBolck.length > 0)
		{
			let switchNode = types.SwitchStatement(switchId,switchBolck);
			let retArray = [path.node.body.body[0]];
			retArray.push(path.node.body.body[3])
			retArray.push(switchNode);
			path.node.body = types.BlockStatement(retArray);
		}
	}
}

traverse(ast, ifToSwitch);

let {code} = generator(ast,opts = {jsescOption:{"minimal":true}});

fs.writeFile(decodeFile, code, (err) => {});