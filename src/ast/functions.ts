import { ASTNode, ContainerNode, Value, Identifier, Identifiable } from ".";
import { Interpreter } from "../Interpreter";


export class FunctionDeclaration implements ASTNode, ContainerNode, Identifiable {
  constructor(
    private _id: Identifier,
    private _body: Array<ASTNode>,
  ) { }

  eval(interpreter: Interpreter): Value {
    return this.body[0].eval(interpreter)
  }

  node_type(): string { return 'FunctionDeclaration' }

  get body(): Array<ASTNode> {
    return this._body;
  }

  get id(): Identifier { return this._id }
}

export class CallExpression implements ASTNode {
  constructor(private callee: Identifier) { }

  node_type(): string {
    return "CallExpression"
  }

  eval(interpreter: Interpreter) {
    return interpreter.get(this.callee).eval(interpreter)
  }

}
