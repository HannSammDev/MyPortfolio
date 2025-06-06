import React from 'react'
import * as ReactDOM from 'react-dom/client' // ← this is required
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import 'flowbite';
import { Layout } from './layout';


const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Layout/>} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
