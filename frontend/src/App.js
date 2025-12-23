import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Amenities from './pages/Amenities';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import BookNow from './pages/BookNow';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookNow />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;