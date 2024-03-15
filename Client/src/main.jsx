import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DashboardState from './context/DashboardState';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DashboardState>
        <App />
      </DashboardState>
    </BrowserRouter>
  </React.StrictMode>,
)
