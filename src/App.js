import React from 'react';
import './styles/styles.css';
import Movielist from './components/Movielist';
import {MovieProvider} from './components/MovieContext';
import Navbar from './components/Navbar';
import Addmovie from './components/Addmovie';

function App() {
  return (
    <MovieProvider>
    <div className="App">
      <Navbar />
      <Addmovie />
      <Movielist />
    </div>
    </MovieProvider>
  );
}

export default App;
