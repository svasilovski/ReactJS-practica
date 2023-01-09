import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TaskDashboard from './pages/TaskDashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/dashboard" element={<TaskDashboard />} />
          </Routes>
        </BrowserRouter>
    );
}

export default App;
