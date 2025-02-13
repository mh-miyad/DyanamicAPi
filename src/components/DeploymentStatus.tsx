import React from 'react';
import { CheckCircle, Loader2, XCircle } from 'lucide-react';

interface DeploymentStatusProps {
  status: {
    isDeployed: boolean;
    status: string;
    url: string;
  };
}

function DeploymentStatus({ status }: DeploymentStatusProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Deployment Status</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          {status.status === 'deploying' && (
            <Loader2 className="h-5 w-5 text-indigo-500 animate-spin" />
          )}
          {status.status === 'success' && (
            <CheckCircle className="h-5 w-5 text-green-500" />
          )}
          {status.status === 'error' && (
            <XCircle className="h-5 w-5 text-red-500" />
          )}
          <span className="text-sm font-medium text-gray-900">
            {status.status === 'idle' && 'Not deployed'}
            {status.status === 'deploying' && 'Deploying...'}
            {status.status === 'success' && 'Deployed successfully'}
            {status.status === 'error' && 'Deployment failed'}
          </span>
        </div>

        {status.isDeployed && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              API URL
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={status.url}
                readOnly
                className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm sm:text-sm"
              />
              <button
                onClick={() => navigator.clipboard.writeText(status.url)}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeploymentStatus;