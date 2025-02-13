import React from 'react';
import { Database, Lock } from 'lucide-react';

interface APIInfoProps {
  config: {
    name: string;
    database: string;
    useAuth: boolean;
  };
  setConfig: React.Dispatch<React.SetStateAction<{
    name: string;
    database: string;
    useAuth: boolean;
  }>>;
}

function APIInfo({ config, setConfig }: APIInfoProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">API Information</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="api-name" className="block text-sm font-medium text-gray-700">
            API Name
          </label>
          <input
            type="text"
            id="api-name"
            value={config.name}
            onChange={(e) => setConfig(prev => ({ ...prev, name: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="my-awesome-api"
          />
        </div>

        <div>
          <label htmlFor="database" className="block text-sm font-medium text-gray-700">
            Database
          </label>
          <div className="mt-1 relative">
            <select
              id="database"
              value={config.database}
              onChange={(e) => setConfig(prev => ({ ...prev, database: e.target.value }))}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="postgresql">PostgreSQL</option>
              <option value="mongodb">MongoDB</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <Database className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="auth"
            type="checkbox"
            checked={config.useAuth}
            onChange={(e) => setConfig(prev => ({ ...prev, useAuth: e.target.checked }))}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="auth" className="ml-2 block text-sm text-gray-900">
            Enable JWT Authentication
          </label>
          <Lock className="h-4 w-4 text-gray-400 ml-2" />
        </div>
      </div>
    </div>
  );
}

export default APIInfo;