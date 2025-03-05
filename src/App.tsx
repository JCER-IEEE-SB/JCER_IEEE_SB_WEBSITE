import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/layout/Loader';
import ScrollToTop from './components/layout/ScrollToTop'; // Import the ScrollToTop component
import Navbar from './components/layout/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import Execom from './pages/Execom';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loader for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col min-h-screen transition-opacity duration-1000 opacity-100">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              {/* <Route path="/achievements" element={<Achievements />} /> */}
              <Route path="/execom" element={<Execom />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop /> {/* Include the ScrollToTop component */}
        </div>
      )}
    </Router>
  );
}

export default App;
