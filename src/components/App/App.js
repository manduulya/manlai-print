import './App.css';
import Display from '../display/display';
import Footer from '../footer/footer';
import Header from '../header/header';
import { Routes, Route } from 'react-router-dom'
import About from '../About/About'
import Services from '../Services/Services'

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
