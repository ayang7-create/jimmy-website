import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.tsx';
import Home from './components/home/home.tsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/research" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
