import { CheckCircle, Loader2, XCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

function DeploymentStatus() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Deployment Status</h2>
      
      <div className="bg-card rounded-lg border border-border p-6 space-y-6">
        <div className="flex items-center space-x-3">
          <CheckCircle className="h-6 w-6 text-green-500" />
          <span className="text-lg font-medium">Deployed Successfully</span>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">API URL</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value="https://api.example.com"
              readOnly
              className="flex-1 px-3 py-2 bg-muted border border-input rounded-md"
            />
            <Button variant="outline">
              Copy
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Deployment History</h3>
          <div className="space-y-3">
            {[
              { status: 'success', date: '2024-03-15 14:30' },
              { status: 'error', date: '2024-03-14 16:45' },
              { status: 'success', date: '2024-03-14 12:20' },
            ].map((deployment, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-background rounded-md">
                <div className="flex items-center space-x-3">
                  {deployment.status === 'success' ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-destructive" />
                  )}
                  <span className="text-sm">Deployment {i + 1}</span>
                </div>
                <span className="text-sm text-muted-foreground">{deployment.date}</span>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full">
          Redeploy API
        </Button>
      </div>
    </div>
  );
}

export default DeploymentStatus;