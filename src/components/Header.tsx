import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/recruitment', label: 'Recruitment' },
  { to: '/contact', label: 'Contact' },
] as const;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const closeMobileNav = useCallback(() => {
    setIsMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  }, []);

  const toggleMobileNav = useCallback(() => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
      return next;
    });
  }, []);

  useEffect(() => {
    closeMobileNav();
  }, [location.pathname, closeMobileNav]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMobileNav();
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen, closeMobileNav]);

  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return;
    const nav = menuRef.current;
    const focusableEls = nav.querySelectorAll<HTMLElement>('a[href], button, [tabindex]:not([tabindex="-1"])');
    if (focusableEls.length === 0) return;
    const first = focusableEls[0];
    const last = focusableEls[focusableEls.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    nav.addEventListener('keydown', trapFocus);
    first.focus();
    return () => nav.removeEventListener('keydown', trapFocus);
  }, [isMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`absolute top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 py-2 min-h-[63px] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-sm'
            : 'bg-white/20 backdrop-blur-md border-b border-white/10'
        }`}
        role="banner"
      >
        {/* Mobile logo */}
        <div className="flex items-center lg:hidden">
          <Link to="/" className="flex items-center gap-1 no-underline" onClick={closeMobileNav}>
            <img
              src="/pi_management_log/main.svg"
              alt="Agency Sumber Global - Licensed Manpower Recruitment Agency Malaysia"
              className="w-[55px] h-[45px] object-contain"
              width="40"
              height="40"
            />
            <div className="flex flex-col items-center">
              <div className="text-[0.4rem] font-bold text-brand-green uppercase tracking-[1.2px] leading-none">AGENCY PEKERJAAN</div>
              <div className="text-[0.8rem] font-bold text-brand-blue uppercase tracking-wide leading-none">SUMBER GLOBAL</div>
            </div>
          </Link>
        </div>

        {/* Desktop logo */}
        <Link to="/" className="hidden lg:flex items-center gap-1 no-underline px-4 h-[45px]">
          <img
            src="/pi_management_log/main.svg"
            alt="Agency Sumber Global - Licensed Manpower Recruitment Agency Malaysia"
            className="w-[65px] h-[45px] object-contain"
            width="48"
            height="48"
          />
          <div className="flex flex-col items-center">
            <div className="text-[0.6rem] font-bold text-brand-green uppercase tracking-[2px] leading-tight mb-0.5">AGENCY PEKERJAAN</div>
            <div className="text-[1.3rem] font-bold text-brand-blue uppercase tracking-wide leading-tight">SUMBER GLOBAL</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-2 ml-auto items-center" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 no-underline ${
                isScrolled
                  ? isActive(to)
                    ? 'bg-brand-blue text-white shadow-brand'
                    : 'text-gray-700 hover:bg-brand-blue hover:text-white hover:-translate-y-0.5'
                  : isActive(to)
                    ? 'bg-brand-blue/90 text-white shadow-brand'
                    : 'text-white hover:bg-brand-blue/80 hover:text-white hover:-translate-y-0.5 [text-shadow:_1px_1px_4px_rgba(0,0,0,0.6)]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <div
          ref={hamburgerRef}
          className="flex lg:hidden flex-col justify-center items-center cursor-pointer w-8 h-8 relative"
          onClick={toggleMobileNav}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMobileNav(); }
          }}
          role="button"
          tabIndex={0}
          aria-expanded={isMenuOpen}
          aria-controls="mobileNav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-[18px] h-[2px] bg-brand-green rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : 'my-[2px]'}`} />
          <span className={`block w-[18px] h-[2px] bg-brand-green rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : 'my-[2px]'}`} />
          <span className={`block w-[18px] h-[2px] bg-brand-green rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : 'my-[2px]'}`} />
        </div>
      </header>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[150] bg-black/30 backdrop-blur-sm animate-[fadeIn_0.3s_ease]"
          onClick={closeMobileNav}
          aria-hidden="true"
        />
      )}

      {/* Mobile nav */}
      <nav
        ref={menuRef}
        className={`fixed top-0 left-0 w-[280px] h-screen z-[200] bg-white/95 backdrop-blur-xl border-r border-gray-200/50 flex flex-col transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        id="mobileNav"
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-center gap-1 p-6 pb-4 border-b border-gray-100">
          <img
            src="/pi_management_log/main.svg"
            alt="Agency Sumber Global - Licensed Manpower Recruitment Agency Malaysia"
            className="w-[80px] h-[60px] object-contain"
            width="40"
            height="40"
          />
          <div className="flex flex-col items-center">
            <div className="text-[0.5rem] font-bold text-brand-green uppercase tracking-[1.5px] leading-tight">AGENCY PEKERJAAN</div>
            <div className="text-[0.9rem] font-bold text-brand-blue uppercase tracking-wide leading-tight">SUMBER GLOBAL</div>
          </div>
        </div>

        <div className="flex-1 py-4 px-3">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block px-4 py-3.5 rounded-lg text-base font-semibold transition-all duration-200 no-underline mb-1 ${
                isActive(to)
                  ? 'bg-brand-blue/10 text-brand-blue'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-brand-blue'
              }`}
              onClick={closeMobileNav}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center font-medium">
            Agensi Pekerjaan Sumber Global Sdn. Bhd.
          </p>
        </div>
      </nav>
    </>
  );
};

export default Header;
