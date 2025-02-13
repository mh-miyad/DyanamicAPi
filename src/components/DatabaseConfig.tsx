import React from 'react';
import { Database, Key, Lock } from 'lucide-react';

interface DatabaseConfigProps {
  database: string;
}

function DatabaseConfig({ database }: DatabaseConfigProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Database Configuration</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="host" className="block text-sm font-medium text-gray-700">
            Host
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="host"
              className="block w-full pr-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder={database === 'postgresql' ? 'localhost:5432' : 'mongodb://localhost:27017'}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Database className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="database-name" className="block text-sm font-medium text-gray-700">
            Database Name
          </label>
          <input
            type="text"
            id="database-name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="my_database"
          />
        </div>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="username"
              className="block w-full pr-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Key className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="password"
              id="password"
              className="block w-full pr-10 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Lock className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatabaseConfig;