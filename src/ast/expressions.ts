import { Value, ASTNode } from './nodes';
import { Interpreter } from '../Interpreter'

export interface Expression { }

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
export class BinaryExpression implements ASTNode, Expression {
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


export type LiteralValue = number | string | boolean | undefined;
export class Literal implements ASTNode {
  constructor(
    readonly value: LiteralValue
  ) { }

  node_type() { return "Literal" }
  eval(interpreter: Interpreter): Value {
    return this.value
  }
}
