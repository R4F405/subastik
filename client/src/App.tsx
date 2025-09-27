import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/HomePage';
import { ROUTES } from './constants';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route 
            path={ROUTES.HOME} 
            element={<HomePage />} 
          />
          <Route 
            path={ROUTES.REGISTER} 
            element={<RegisterPage />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;