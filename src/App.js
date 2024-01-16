import React from 'react';
import ChipComponent from './ChipComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand mb-0 h1">My Chip App</span>
        </div>
      </nav>
      <div className="container mt-4">
        <ChipComponent />
      </div>
      <footer className="bg-dark text-white text-center py-2 fixed-bottom">
        <p>&copy; 2024 My Chip App</p>
      </footer>
    </div>
  );
}

export default App;
