import { Send, Code } from 'lucide-react';
import { Button } from '../components/ui/button';

function APITesting() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">API Testing</h2>
      
      <div className="bg-card rounded-lg border border-border p-6 space-y-6">
        <div className="flex space-x-2">
          <select className="px-3 py-2 bg-background border border-input rounded-md">
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </select>
          
          <input
            type="text"
            className="flex-1 px-3 py-2 bg-background border border-input rounded-md"
            placeholder="/api/endpoint"
            defaultValue="/api/"
          />
          
          <Button>
            <Send className="h-4 w-4 mr-2" />
            Test
          </Button>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Request Body</label>
          <textarea
            className="w-full h-32 px-3 py-2 bg-background border border-input rounded-md font-mono text-sm"
            placeholder="{\n  \n}"
          />
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Code className="h-4 w-4" />
            <label className="text-sm font-medium">Response</label>
          </div>
          <textarea
            readOnly
            value="// Response will appear here"
            className="w-full h-48 px-3 py-2 bg-muted border border-input rounded-md font-mono text-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default APITesting;