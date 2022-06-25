import { BinaryExpression, BinaryOperation, ExpressionStatement, Literal, Program } from "./ast";
import { Interpreter } from "./Interpreter";

const interpreter = new Interpreter();

const program = new Program([
  new ExpressionStatement(
    new BinaryExpression(
      BinaryOperation.Plus,
      new Literal(1),
      new Literal(2)
    )
  )
]);

interpreter.eval_program(program)
