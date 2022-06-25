import { Interpreter } from '../Interpreter';


export type Identifier = { name: string }
export interface Identifiable {
  get id(): Identifier;
}

export type Value = any;
export interface ASTNode {
  eval(interpreter: Interpreter): Value;
  node_type(): string;
}

export interface ContainerNode {
  get body(): Array<ASTNode>
}
