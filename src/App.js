import { BrowserRouter as Router } from 'react-router-dom';
import { PageRoutes } from './pages/routes';
import './App.css';

function App() {
  return (
    <Router>
      <PageRoutes />
    </Router>
  );
}

export default App;
