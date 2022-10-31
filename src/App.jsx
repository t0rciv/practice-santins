import react from 'react';
import Header from './components/header/Header';
import About from './components/main/About';
import Stats from './components/main/Stats';
import Funds from './components/main/funds';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Stats />
      <Funds />
      <Footer />
    </div>
  );
}

export default App;
