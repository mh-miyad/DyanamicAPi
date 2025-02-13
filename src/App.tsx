import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme-provider';
import Layout from './components/Layout';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="api-dashboard-theme">
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;