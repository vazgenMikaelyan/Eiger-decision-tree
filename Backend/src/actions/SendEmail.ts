import { ActionNode } from '../types';

export class SendEmail implements ActionNode {
  type = 'SendEmail';
  from: string;
  to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  async execute() {
    console.log(`Sending Email from ${this.from} to ${this.to}`);
  }
}
