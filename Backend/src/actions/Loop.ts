import { ActionNode } from '../types';

export class Loop implements ActionNode {
  type = 'Loop';
  iterations: number;
  action: ActionNode;

  constructor(iterations: number, action: ActionNode) {
    this.iterations = iterations;
    this.action = action;
  }

  async execute(context: Record<string, any>) {
    for (let i = 0; i < this.iterations; i++) {
      await this.action.execute(context);
    }
  }
}
