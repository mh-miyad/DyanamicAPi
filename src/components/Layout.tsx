import { Routes, Route, NavLink } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import { ThemeToggle } from './ui/theme-toggle';
import Dashboard from '../pages/Dashboard';
import APIInfo from '../pages/APIInfo';
import RequestConfig from '../pages/RequestConfig';
import DatabaseConfig from '../pages/DatabaseConfig';
import DeploymentStatus from '../pages/DeploymentStatus';
import APITesting from '../pages/APITesting';

function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-card border-r border-border">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">API Dashboard</span>
          </div>
        </div>
        <nav className="px-4 py-2">
          {[
            { to: '/', label: 'Dashboard' },
            { to: '/api-info', label: 'API Information' },
            { to: '/request-config', label: 'Request Config' },
            { to: '/database-config', label: 'Database Config' },
            { to: '/deployment', label: 'Deployment' },
            { to: '/testing', label: 'API Testing' },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-4 py-2 my-1 rounded-md transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        {/* Header */}
        <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-card">
          <h1 className="text-xl font-semibold">API Generator</h1>
          <ThemeToggle />
        </header>

        {/* Content */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/api-info" element={<APIInfo />} />
            <Route path="/request-config" element={<RequestConfig />} />
            <Route path="/database-config" element={<DatabaseConfig />} />
            <Route path="/deployment" element={<DeploymentStatus />} />
            <Route path="/testing" element={<APITesting />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Layout;