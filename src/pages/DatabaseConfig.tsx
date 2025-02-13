import { Database, Key, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';

function DatabaseConfig() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Database Configuration</h2>
      
      <div className="bg-card rounded-lg border border-border p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Host</label>
          <div className="relative">
            <input
              type="text"
              className="w-full pl-3 pr-10 py-2 bg-background border border-input rounded-md"
              placeholder="localhost:5432"
            />
            <Database className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Database Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-background border border-input rounded-md"
            placeholder="my_database"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Username</label>
          <div className="relative">
            <input
              type="text"
              className="w-full pl-3 pr-10 py-2 bg-background border border-input rounded-md"
            />
            <Key className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <input
              type="password"
              className="w-full pl-3 pr-10 py-2 bg-background border border-input rounded-md"
            />
            <Lock className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <Button className="w-full">
          Test Connection
        </Button>
      </div>
    </div>
  );
}

export default DatabaseConfig;