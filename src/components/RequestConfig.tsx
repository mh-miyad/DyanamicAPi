import React, { useState } from 'react';
import { Route, ArrowRight } from 'lucide-react';

const HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE'] as const;

function RequestConfig() {
  const [activeTab, setActiveTab] = useState<typeof HTTP_METHODS[number]>('GET');
  const [schema, setSchema] = useState('{\n  "type": "object",\n  "properties": {\n    \n  }\n}');

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Request Configuration</h2>
      
      {/* Method Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {HTTP_METHODS.map((method) => (
            <button
              key={method}
              onClick={() => setActiveTab(method)}
              className={`
                ${activeTab === method
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              `}
            >
              {method}
            </button>
          ))}
        </nav>
      </div>

      {/* Route Configuration */}
      <div className="mt-4">
        <label htmlFor="route" className="block text-sm font-medium text-gray-700">
          Route Path
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
            <Route className="h-4 w-4 mr-2" />
            /api/
          </span>
          <input
            type="text"
            id="route"
            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="users"
          />
        </div>
      </div>

      {/* Schema Definition */}
      <div className="mt-4">
        <label htmlFor="schema" className="block text-sm font-medium text-gray-700">
          {activeTab === 'GET' ? 'Response' : 'Request'} Schema
        </label>
        <div className="mt-1">
          <textarea
            id="schema"
            rows={8}
            value={schema}
            onChange={(e) => setSchema(e.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md font-mono"
          />
        </div>
      </div>

      {/* Middleware Options */}
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Middleware</h3>
        <div className="space-y-2">
          {['CORS', 'Body Parser', 'Rate Limiting'].map((middleware) => (
            <div key={middleware} className="flex items-center">
              <input
                id={`middleware-${middleware}`}
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={`middleware-${middleware}`} className="ml-2 block text-sm text-gray-900">
                {middleware}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RequestConfig;