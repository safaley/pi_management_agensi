import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const NotFound: React.FC = () => {
  usePageMeta(
    'Page Not Found | Agensi Pekerjaan Sumber Global',
    'The page you are looking for does not exist.'
  );

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-brand-blue mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8">The page you are looking for does not exist or has been moved.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="inline-block bg-brand-green text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-brand-green-light transition-all no-underline">
            Back to Home
          </Link>
          <Link to="/contact" className="inline-block bg-white text-brand-blue text-sm font-semibold px-8 py-3 rounded-full border border-brand-blue hover:bg-brand-blue-50 transition-all no-underline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
