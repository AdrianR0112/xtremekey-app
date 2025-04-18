import React from 'react';
import './App.css';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </div>
  );
}

export default App;