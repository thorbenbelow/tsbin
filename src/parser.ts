import { Program } from "./ast";

enum Type {
  Identifier = 'Identifier',
  Punctuator = 'Punctuator',
  Keyword = 'Keyword',
}

type Token = {
  type: Type,
  value: string
};

const specialChars = [';', '(', ')']
const keyWords = ["var", "const", "let", "function"]

function toToken(s: string): Token {
  const tok = (type: Type) => ({ type, value: s });

  if (specialChars.includes(s)) {
    return tok(Type.Punctuator)
  }

  if (keyWords.includes(s)) {
    return tok(Type.Keyword)
  }

  return tok(Type.Identifier);
}

export function tokenize(content: string): Array<Token> {
  const tokens: Array<Token> = []
  let l = 0;
  for (let r = 0; r < content.length; r++) {
    const c = content[r];
    if (specialChars.includes(c)) {
      if (l !== r) {
        tokens.push(toToken(content.slice(l, r)));
        tokens.push(toToken(c));
        l = r + 1;
      } else {

      }
    }
  }
  return tokens;
}

export function buildAST(tokens: Array<Token>): Program {
  return new Program([]);
}
