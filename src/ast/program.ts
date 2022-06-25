import { ASTNode, ContainerNode, Value } from "./nodes";
import { Interpreter } from '../Interpreter'
import { Expression } from './expressions'

export class Program implements ASTNode {
  constructor(
    readonly _body: Array<ASTNode>
  ) { }

  get body(): Array<ASTNode> {
    return this._body
  }

  node_type(): string { return "Program" }

  eval(interpreter: Interpreter): Value {
    for (const child of this.body) {
      return child.eval(interpreter)
    }
  }
}

export class BlockStatement implements ASTNode, ContainerNode {
  constructor(
    private _body: Array<ASTNode>
  ) { }

  node_type(): string {
    return "BlockStatement"
  }

  get body(): ASTNode[] {
    return this._body
  }

  eval(interpreter: Interpreter) {
    return this.body[0].eval(interpreter);
  }

}

export class ReturnStatement implements ASTNode {
  constructor(
    private argument: ASTNode & Expression
  ) { }

  node_type(): string {
    return "ReturnStatement"
  }

  eval(interpreter: Interpreter) {
    return this.argument.eval(interpreter)
  }
}
