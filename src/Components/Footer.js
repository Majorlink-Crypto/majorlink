import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_CONTENT } from '../data/content';
import { TEXT_STYLES, textStyle } from '../data/constants';

const { brandName, tagline, columns, copyright } = FOOTER_CONTENT;

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#F0F0F0] relative overflow-hidden" aria-label="Footer">

      {/* Main footer grid */}
      <div className="px-6 md:px-16 pt-14 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/logo192.png" alt="Majorlink logo" className="w-7 h-7 object-contain" />
              <span style={textStyle(TEXT_STYLES.footerBrand)}>{brandName}</span>
            </Link>
            <p style={textStyle(TEXT_STYLES.footerLink)}>
              {tagline}
            </p>
          </div>

          {/* Dynamic columns */}
          {columns.map((col, i) => (
            <div key={i}>
              <h3
                className="mb-4"
                style={{ ...textStyle(TEXT_STYLES.footerLink), fontWeight: 600 }}
              >
                {col.title}
              </h3>
              <ul className="space-y-3">
                {/* Link items */}
                {col.links && col.links.map((link, j) => (
                  <li key={j}>
                    {link.to ? (
                    <Link
                      to={link.to}
                      className="hover:text-[#1B30F5] transition-colors"
                      style={textStyle(TEXT_STYLES.footerLink)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#1B30F5] transition-colors"
                      style={textStyle(TEXT_STYLES.footerLink)}
                    >
                      {link.label}
                    </a>
                    )}
                  </li>
                ))}
                {/* Plain text items (e.g. contact info) */}
                {col.items && col.items.map((item, j) => (
                  <li key={j} style={textStyle(TEXT_STYLES.footerLink)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-5 border-t border-[#F0F0F0]">
          <p className="text-[#9CA3AF] text-xs font-aeonikmedium text-center">
            {copyright}
          </p>
        </div>
      </div>

      {/* Light blue cloud gradient at the bottom — matching screenshot */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #DDEEFF 0%, transparent 100%)',
          opacity: 0.45,
        }}
      />
    </footer>
  );
};

export default Footer;