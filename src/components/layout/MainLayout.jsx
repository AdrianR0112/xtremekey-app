// src/components/layout/MainLayout.jsx
import React, { useState } from 'react';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="main-layout">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>SalesManager</h2>
          <button className="toggle-button" onClick={toggleSidebar}>
            {sidebarOpen ? '←' : '→'}
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active">
              <a href="#dashboard">
                <span className="icon">📊</span>
                <span className="text">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#sales">
                <span className="icon">💰</span>
                <span className="text">Ventas</span>
              </a>
            </li>
            <li>
              <a href="#products">
                <span className="icon">📦</span>
                <span className="text">Productos</span>
              </a>
            </li>
            <li>
              <a href="#clients">
                <span className="icon">👥</span>
                <span className="text">Clientes</span>
              </a>
            </li>
            <li>
              <a href="#streaming">
                <span className="icon">🎬</span>
                <span className="text">Streaming</span>
              </a>
            </li>
            <li>
              <a href="#licenses">
                <span className="icon">🔑</span>
                <span className="text">Licencias</span>
              </a>
            </li>
            <li>
              <a href="#reports">
                <span className="icon">📝</span>
                <span className="text">Reportes</span>
              </a>
            </li>
            <li>
              <a href="#settings">
                <span className="icon">⚙️</span>
                <span className="text">Configuración</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="main-content">
        <header className="top-header">
          <div className="search-bar">
            <input type="text" placeholder="Buscar..." />
          </div>
          <div className="user-menu">
            <span className="notifications">🔔</span>
            <div className="profile">
              <span className="profile-pic">👤</span>
              <span className="profile-name">Admin</span>
            </div>
          </div>
        </header>

        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;