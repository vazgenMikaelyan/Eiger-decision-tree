import { useState } from 'react';
import axios from 'axios';

import { decisions } from "./decisions";

export default function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExecute = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const parsed = JSON.parse(jsonInput);
      await axios.post('http://localhost:3000/execute', parsed);
      setMessage('Execution completed successfully.');
    } catch (error: any) {
      setMessage(`Error: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="p-4 max-w-2xl mx-auto flex" onSubmit={handleExecute}>
      <div className="flex flex-column gap-2 col-5">
        {
          decisions.map((decision: Record<string, any>) => {
            return (
              <label className="flex-1">
                <input type="radio"
                  name="decision"
                  value={JSON.stringify(decision.data)} 
                  onChange={(e) => setJsonInput(e.target.value)} />
                <span>{decision.title}</span>
              </label>
            )
          })
        }
      </div>
      <div className="flex-1">
        <textarea value={jsonInput}
          className="w-full min-h-full p-2 border rounded"
          placeholder="Paste your decision tree JSON here..." />
        <button type="submit">
          {loading ? 'Executing...' : 'Execute'}
        </button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </form>
  );
}