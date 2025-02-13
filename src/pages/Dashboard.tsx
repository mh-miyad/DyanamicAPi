import { useState } from 'react';
import { Activity, Database, Server, Code, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { CreateProjectModal } from '../components/CreateProjectModal';

function Dashboard() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const stats = [
    { label: 'Active APIs', value: '12', icon: Activity, color: 'text-green-500' },
    { label: 'Database Connections', value: '5', icon: Database, color: 'text-blue-500' },
    { label: 'Total Deployments', value: '28', icon: Server, color: 'text-purple-500' },
    { label: 'API Endpoints', value: '45', icon: Code, color: 'text-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <Button onClick={() => setShowCreateModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Project
        </Button>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="p-6 bg-card rounded-lg border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            'New API "User Service" deployed',
            'Database connection updated',
            'Added authentication endpoints',
            'Modified rate limiting rules',
          ].map((activity, i) => (
            <div key={i} className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>{activity}</span>
            </div>
          ))}
        </div>
      </div>

      <CreateProjectModal
        open={showCreateModal}
        onOpenChange={setShowCreateModal}
      />
    </div>
  );
}

export default Dashboard;