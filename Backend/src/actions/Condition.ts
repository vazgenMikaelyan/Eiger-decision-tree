import { ActionNode } from '../types';

export class Condition implements ActionNode {
  type = 'Condition';
  expression: string;
  trueAction: ActionNode;
  falseAction: ActionNode;

  constructor(expression: string, trueAction: ActionNode, falseAction: ActionNode) {
    this.expression = expression;
    this.trueAction = trueAction;
    this.falseAction = falseAction;
  }

  async execute(context: Record<string, any>) {
    const result = eval(this.expression); 
    if (result) {
      await this.trueAction.execute(context);
    } else {
      await this.falseAction.execute(context);
    }
  }
}
