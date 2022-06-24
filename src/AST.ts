import { Interpreter } from "./Interpreter";

type Value = any;

export interface ASTNode {
  eval(interpreter: Interpreter): Value;
  node_type(): string;
}

export interface Expression { }

export class Program implements ASTNode {

  constructor(
    readonly body: Array<ASTNode>
  ) { }

  node_type(): string { return "Program" }

  eval(interpreter: Interpreter): Value {
    for (const child of this.body) {
      return child.eval(interpreter)
    }
  }
}

export class ExpressionStatement implements ASTNode {
  constructor(
    readonly expression: Expression & ASTNode
  ) { }
  node_type() { return "ExpressionStatement" }

  eval(interpreter: Interpreter): Value {
    return this.expression.eval(interpreter)
  }

}

export enum BinaryOperation {
  Plus = '+',
  Minus = '-'
}

export type LiteralValue = number | string | boolean;

export class Literal implements ASTNode {
  constructor(
    readonly value: LiteralValue
  ) { }

  node_type() { return "Literal" }
  eval(interpreter: Interpreter): Value {
    return this.value
  }

}


export class BinaryExpression implements ASTNode {
  constructor(
    readonly operation: BinaryOperation,
    readonly left: Literal,
    readonly right: Literal,
  ) { }

  eval(interpreter: Interpreter): Value {
    switch (this.operation) {
      case BinaryOperation.Plus: return this.left.eval(interpreter) + this.right.eval(interpreter);
      case BinaryOperation.Minus: return this.left.eval(interpreter) - this.right.eval(interpreter);
      default:
        throw Error(`${this.node_type} is not a valid BinaryOperation`)
    }
  }

  node_type(): string { return "BinaryExpression" }
}


