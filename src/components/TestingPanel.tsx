import React, { useState } from 'react';
import { Send, Code } from 'lucide-react';

interface TestingPanelProps {
  deploymentStatus: {
    isDeployed: boolean;
    status: string;
    url: string;
  };
}

function TestingPanel({ deploymentStatus }: TestingPanelProps) {
  const [method, setMethod] = useState('GET');
  const [endpoint, setEndpoint] = useState('/api/');
  const [requestBody, setRequestBody] = useState('{\n  \n}');
  const [response, setResponse] = useState('// Response will appear here');

  const handleTest = () => {
    if (!deploymentStatus.isDeployed) {
      setResponse('// Please deploy the API first');
      return;
    }
    
    setResponse('// Testing endpoint...\n{\n  "status": "success",\n  "data": {}\n}');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">API Testing</h2>

      <div className="space-y-4">
        <div className="flex space-x-2">
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </select>
          
          <input
            type="text"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="/api/endpoint"
          />
          
          <button
            onClick={handleTest}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Send className="h-4 w-4 mr-2" />
            Test
          </button>
        </div>

        {(method === 'POST' || method === 'PUT') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Request Body
            </label>
            <textarea
              value={requestBody}
              onChange={(e) => setRequestBody(e.target.value)}
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm font-mono"
            />
          </div>
        )}

        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Code className="h-4 w-4 text-gray-500" />
            <label className="block text-sm font-medium text-gray-700">
              Response
            </label>
          </div>
          <textarea
            value={response}
            readOnly
            rows={6}
            className="w-full rounded-md bg-gray-50 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm font-mono"
          />
        </div>
      </div>
    </div>
  );
}

export default TestingPanel;