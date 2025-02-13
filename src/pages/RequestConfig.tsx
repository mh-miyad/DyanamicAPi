import { Route } from 'lucide-react';
import { Button } from '../components/ui/button';

function RequestConfig() {
  const methods = ['GET', 'POST', 'PUT', 'DELETE'];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Request Configuration</h2>
      
      <div className="bg-card rounded-lg border border-border p-6">
        {/* Method Tabs */}
        <div className="flex space-x-2 mb-6">
          {methods.map((method) => (
            <Button
              key={method}
              variant="outline"
              className="w-20"
            >
              {method}
            </Button>
          ))}
        </div>

        {/* Route Configuration */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Route Path</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                <Route className="h-4 w-4" />
                /api/
              </span>
              <input
                type="text"
                className="flex-1 px-3 py-2 bg-background border border-input rounded-r-md"
                placeholder="users"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Request Schema</label>
            <textarea
              className="w-full h-48 px-3 py-2 bg-background border border-input rounded-md font-mono text-sm"
              placeholder="{\n  'type': 'object',\n  'properties': {\n    \n  }\n}"
            />
          </div>

          <Button className="w-full">
            Save Configuration
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RequestConfig;