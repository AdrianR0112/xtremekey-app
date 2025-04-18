// src/components/dashboard/Dashboard.jsx
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Panel de Control</h1>
        <div className="dashboard-date">
          {new Date().toLocaleDateString()}
        </div>
      </div>
      
      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Ventas Totales</h3>
          <p className="summary-value">$0.00</p>
          <p className="summary-label">Este mes</p>
        </div>
        
        <div className="summary-card">
          <h3>Licencias Activas</h3>
          <p className="summary-value">0</p>
          <p className="summary-label">Total</p>
        </div>
        
        <div className="summary-card">
          <h3>Clientes</h3>
          <p className="summary-value">0</p>
          <p className="summary-label">Registrados</p>
        </div>
        
        <div className="summary-card">
          <h3>Renovaciones</h3>
          <p className="summary-value">0</p>
          <p className="summary-label">Próximas (30 días)</p>
        </div>
      </div>
      
      <div className="dashboard-charts">
        <div className="chart-container">
          <h3>Ventas por Categoría</h3>
          <div className="chart-placeholder">
            {/* Aquí irá tu gráfico de ventas */}
            <p>Gráfico de ventas</p>
          </div>
        </div>
        
        <div className="chart-container">
          <h3>Tendencia de Ventas</h3>
          <div className="chart-placeholder">
            {/* Aquí irá tu gráfico de tendencia */}
            <p>Gráfico de tendencia</p>
          </div>
        </div>
      </div>
      
      <div className="dashboard-recent">
        <h3>Ventas Recientes</h3>
        <table className="recent-sales-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Fecha</th>
              <th>Monto</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="no-data">No hay ventas recientes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;