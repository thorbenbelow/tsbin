import { tokenize } from '../src/parser';

describe('#tokenize', () => {

  it("basic script", () => {
    const fixture = `const a = 1;
const b = a + 2;
`;
    const expectation = [
      {
        "type": "Keyword",
        "value": "const"
      },
      {
        "type": "Identifier",
        "value": "a"
      },
      {
        "type": "Punctuator",
        "value": "="
      },
      {
        "type": "Numeric",
        "value": "1"
      },
      {
        "type": "Punctuator",
        "value": ";"
      },
      {
        "type": "Keyword",
        "value": "const"
      },
      {
        "type": "Identifier",
        "value": "b"
      },
      {
        "type": "Punctuator",
        "value": "="
      },
      {
        "type": "Identifier",
        "value": "a"
      },
      {
        "type": "Punctuator",
        "value": "+"
      },
      {
        "type": "Numeric",
        "value": "2"
      },
      {
        "type": "Punctuator",
        "value": ";"
      }
    ];
    expect(tokenize(fixture)).toEqual(expectation)
  });

  it("basic function", () => {
    const fixture = `function foo() {
return 1;
}
foo();
`;
    const expectation = [
      {
        "type": "Keyword",
        "value": "function"
      },
      {
        "type": "Identifier",
        "value": "foo"
      },
      {
        "type": "Punctuator",
        "value": "("
      },
      {
        "type": "Punctuator",
        "value": ")"
      },
      {
        "type": "Punctuator",
        "value": "{"
      },
      {
        "type": "Keyword",
        "value": "return"
      },
      {
        "type": "Numeric",
        "value": "1"
      },
      {
        "type": "Punctuator",
        "value": ";"
      },
      {
        "type": "Punctuator",
        "value": "}"
      },
      {
        "type": "Identifier",
        "value": "foo"
      },
      {
        "type": "Punctuator",
        "value": "("
      },
      {
        "type": "Punctuator",
        "value": ")"
      },
      {
        "type": "Punctuator",
        "value": ";"
      }
    ];

    expect(tokenize(fixture)).toEqual(expectation)
  });


})
