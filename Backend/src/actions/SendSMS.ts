import { ActionNode } from '../types';

export class SendSMS implements ActionNode {
  type = 'SendSMS';
  phoneNumber: string;

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  async execute() {
    console.log(`Sending SMS to ${this.phoneNumber}`);
  }
}