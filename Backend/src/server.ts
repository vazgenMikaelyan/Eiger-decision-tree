import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import { deserialize } from './factory';
import { SerializedNode } from './types';

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/execute', async (req: express.Request, res: express.Response) => {
  try {
    const rootNode: SerializedNode = req.body;
    const actionTree = deserialize(rootNode);
    await actionTree.execute({});
    const data = { message: 'Execution completed successfully' };
    res.status(200).send(data);
  } catch (err: any) {
    res.status(500).send({message:err.message});
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
