export interface ActionNode {
  type: string;
  execute(context: Record<string, any>): Promise<void>;
}

export interface SerializedNode {
  type: string;
  [key: string]: any;
}
