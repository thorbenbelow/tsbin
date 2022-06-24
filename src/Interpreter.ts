import { Program } from './AST'

export class Interpreter {

  eval_program(program: Program) {
    console.log(program.eval(this))
  }
}
