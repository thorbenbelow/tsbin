import { Program } from "./ast";

enum Type {
  Identifier = 'Identifier',
  Punctuator = 'Punctuator',
  Keyword = 'Keyword',
  Numeric = 'Numeric',
}

type Token = {
  type: Type,
  value: string
};

const specialChars = [';', '(', ')', '{', '}', '=', '+']
const keyWords = ["var", "const", "let", "function", "return"]

function toToken(s: string): Token {
  const tok = (type: Type) => ({ type, value: s });

  if (specialChars.includes(s)) {
    return tok(Type.Punctuator)
  }

  if (keyWords.includes(s)) {
    return tok(Type.Keyword)
  }

  if (s.match(/\d+/)) {
    return tok(Type.Numeric)
  }

  return tok(Type.Identifier);
}

export function tokenize(content: string): Array<Token> {
  const tokens: Array<Token> = []
  let l = 0;
  for (let r = 0; r < content.length; r++) {
    const c = content[r];

    // handle whitespaces
    if (c.match(/\s/)) {
      if (l !== r) {
        tokens.push(toToken(content.slice(l, r)));
      }
      l = r + 1;
    }

    // special chars
    if (specialChars.includes(c)) {
      if (l !== r) {
        tokens.push(toToken(content.slice(l, r)));
      }
      l = r + 1;
      tokens.push(toToken(c));
    }
  }
  console.log(tokens)

  return tokens;
}

export function buildAST(tokens: Array<Token>): Program {
  return new Program([]);
}
