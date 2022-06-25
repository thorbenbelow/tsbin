import { ASTNode, Identifier, Program, Identifiable, Literal } from './ast'

export class Interpreter {

  heap = new Map<string, ASTNode>();

  eval_program(program: Program) {
    return program.eval(this)
  }

  get(id: Identifier): ASTNode {
    return this.heap.get(id.name) ?? new Literal(undefined)
  }

  add(node: ASTNode & Identifiable): void {
    this.heap.set(node.id.name, node)
  }
}
