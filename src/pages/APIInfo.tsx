import { Database, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';

function APIInfo() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">API Information</h2>
      
      <div className="bg-card rounded-lg border border-border p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">API Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-background border border-input rounded-md"
            placeholder="my-awesome-api"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Database Type</label>
          <div className="relative">
            <select className="w-full px-3 py-2 bg-background border border-input rounded-md appearance-none">
              <option value="postgresql">PostgreSQL</option>
              <option value="mongodb">MongoDB</option>
            </select>
            <Database className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="auth"
            className="rounded border-input"
          />
          <label htmlFor="auth" className="text-sm font-medium">
            Enable JWT Authentication
          </label>
          <Lock className="h-4 w-4 text-muted-foreground" />
        </div>

        <Button className="w-full">
          Save Configuration
        </Button>
      </div>
    </div>
  );
}

export default APIInfo;