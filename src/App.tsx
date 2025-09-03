import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import ProtectedRoute from '../components/ProtectedRoute';
import SignUp from '../components/Signup';

import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
