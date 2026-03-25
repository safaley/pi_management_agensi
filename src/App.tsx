import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Recruitment = lazy(() => import('./pages/Recruitment'));
const Contact = lazy(() => import('./pages/Contact'));
const ForeignWorkerRecruitment = lazy(() => import('./pages/ForeignWorkerRecruitment'));
const ManpowerAgencyJohorBahru = lazy(() => import('./pages/ManpowerAgencyJohorBahru'));
const ManpowerAgencyPenang = lazy(() => import('./pages/ManpowerAgencyPenang'));
const DomesticHelperMalaysia = lazy(() => import('./pages/DomesticHelperMalaysia'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Header />
          <main className="relative z-[1]">
            <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-8 h-8 border-[3px] border-gray-200 border-t-brand-blue rounded-full animate-spin" /></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/recruitment" element={<Recruitment />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/foreign-worker-recruitment-malaysia" element={<ForeignWorkerRecruitment />} />
                <Route path="/manpower-agency-johor-bahru" element={<ManpowerAgencyJohorBahru />} />
                <Route path="/manpower-agency-penang" element={<ManpowerAgencyPenang />} />
                <Route path="/domestic-helper-malaysia" element={<DomesticHelperMalaysia />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
