import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IonIcon } from 'react-ion-icon';
import { NAV_CONTENT } from '../data/content';
import { TEXT_STYLES, textStyle } from '../data/constants';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* ── Desktop Navbar ────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-8 lg:px-16 py-5"
        aria-label="Main navigation"
      >
        {/* Logo — left */}
        <Link to="/" className="flex items-center space-x-2 shrink-0">
          <img
            src="/logo192.png"
            alt={NAV_CONTENT.logoAlt}
            className="w-7 h-7 object-contain"
          />
          <span
            className="tracking-tight"
            style={textStyle(TEXT_STYLES.navBrand)}
          >
            {NAV_CONTENT.brandName}
          </span>
        </Link>

        {/* Nav links — right (desktop) */}
        <ul className="hidden lg:flex items-center space-x-10 ml-auto">
          {NAV_CONTENT.links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="hover:opacity-70 transition-opacity duration-200"
                style={textStyle(TEXT_STYLES.navLink)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-auto text-zinc-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <IonIcon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </nav>

      {/* ── Mobile Menu ───────────────────────────────────────────────────── */}
      {menuOpen && (
        <div className="fixed inset-0 top-[65px] z-10 bg-white flex flex-col px-8 pt-10 pb-8 lg:hidden">
          <ul className="flex flex-col space-y-8">
            {NAV_CONTENT.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="hover:opacity-70 transition-opacity duration-200"
                  style={{ ...textStyle(TEXT_STYLES.navLink), fontSize: '20px' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
