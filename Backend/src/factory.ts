import { SerializedNode, ActionNode } from './types';
import { SendSMS } from './actions/SendSMS';
import { SendEmail } from './actions/SendEmail';
import { Condition } from './actions/Condition';
import { Loop } from './actions/Loop';

export function deserialize(node: SerializedNode): ActionNode {

  switch (node.type) {
    case 'SendSMS':
      return new SendSMS(node.phoneNumber);
    case 'SendEmail':
      return new SendEmail(node.from, node.to);
    case 'Condition':
      return new Condition(
        node.expression,
        deserialize(node.trueAction),
        deserialize(node.falseAction)
      );
    case 'Loop':
      return new Loop(node.iterations, deserialize(node.action));
    default:
      throw new Error(`Unknown node type: ${node.type}`);
  }
}
