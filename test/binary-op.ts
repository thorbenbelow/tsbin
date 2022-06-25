import { BinaryExpression, BinaryOperation, ExpressionStatement, Literal, Program } from "../src/ast";
import { Interpreter } from "../src/Interpreter";
import test from 'node:test'
import assert from 'node:assert'

test('Basic BinaryOperation', () => {
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

  assert.strictEqual(interpreter.eval_program(program), 3)
})
