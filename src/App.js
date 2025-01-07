import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/common/login';
import RegisterPage from './pages/common/register';
import HomePage from './pages/common/home';
import Dashboard from './pages/common/dashboard';

import ProtectedRoute from './utils/protectedRoutes';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route
            path='/'
            element={
              <ProtectedRoute roles={['ADMIN', 'PASSANGER', 'DRIVER']}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
