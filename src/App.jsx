import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/Features'));
const Help = lazy(() => import('./pages/Help'));
const Support = lazy(() => import('./pages/Support'));
const Enterprise = lazy(() => import('./pages/Enterprise'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container flex-grow-1 mt-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/support" element={<Support />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
