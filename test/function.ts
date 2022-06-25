import { Interpreter } from '../src/Interpreter'
import { CallExpression, BinaryExpression, BinaryOperation, BlockStatement, ExpressionStatement, FunctionDeclaration, Literal, Program, ReturnStatement } from '../src/ast/index'
import test from 'node:test'
import assert from 'node:assert'

test("basic function", () => {
  const id = { name: 'test' }
  const interpreter = new Interpreter();
  const program = new Program([
    new FunctionDeclaration(id, [
      new BlockStatement([
        new ReturnStatement(
          new ExpressionStatement(
            new BinaryExpression(
              BinaryOperation.Plus,
              new Literal(3),
              new Literal(2)
            )
          )
        )
      ])
    ]),
    new ExpressionStatement(
      new CallExpression(id)
    )
  ])
  assert.strictEqual(interpreter.eval_program(program), 5)
})
