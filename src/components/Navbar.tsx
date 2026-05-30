/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Hammer, Cpu, Sparkles, Building2, ChevronDown } from 'lucide-react';
import { ActiveSection } from '../types';
import travisLogo from '../assets/images/travis_group_logo_1780153588610.png';

interface NavbarProps {
  activeSection: ActiveSection;
  setActiveSection: (section: ActiveSection) => void;
  openQuoteModal: (service?: 'Engineering' | 'Digital Marketing' | 'Event Decoration' | 'General Inquiry') => void;
}

export default function Navbar({ activeSection, setActiveSection, openQuoteModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showDivisionsDropdown, setShowDivisionsDropdown] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
  ] as const;

  const divisionItems = [
    { id: 'engineering', label: 'Travis Engineering', icon: Hammer, color: 'text-[#8B7E66] bg-[#F9F8F6] border-[#E5E1DA]' },
    { id: 'digital', label: 'Travis Digital', icon: Cpu, color: 'text-[#2D2A26] bg-[#F9F8F6] border-[#E5E1DA]' },
    { id: 'deco', label: 'Travis Deco', icon: Sparkles, color: 'text-[#8B7E66] bg-[#F9F8F6] border-[#E5E1DA]' },
  ] as const;

  const handleNavigate = (section: ActiveSection) => {
    setActiveSection(section);
    setIsOpen(false);
    setShowDivisionsDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0c2b52] bg-[#0A2342] shadow-md">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6">
        {/* Logo and Branding - Travis Group Logo Image */}
        <button
          onClick={() => handleNavigate('home')}
          className="flex items-center focus:outline-none group select-none"
          id="nav-logo-btn"
        >
          <img
            src={travisLogo}
            alt="Travis Group Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`relative px-4 py-2 font-sans text-sm font-semibold tracking-wide rounded-lg transition-colors focus:outline-none ${
                activeSection === item.id ? 'text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              id={`nav-item-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-white"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}

          {/* Divisions Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDivisionsDropdown(!showDivisionsDropdown)}
              onMouseEnter={() => setShowDivisionsDropdown(true)}
              className={`flex items-center gap-1.5 px-4 py-2 font-sans text-sm font-semibold tracking-wide rounded-lg transition-colors focus:outline-none ${
                ['engineering', 'digital', 'deco'].includes(activeSection)
                  ? 'text-white bg-white/20'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              id="nav-divisions-dropdown-btn"
            >
              Divisions
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showDivisionsDropdown ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showDivisionsDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onMouseEnter={() => setShowDivisionsDropdown(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    onMouseLeave={() => setShowDivisionsDropdown(false)}
                    className="absolute right-0 mt-2 w-72 origin-top-right rounded-xl border border-[#0c2b52] bg-[#0A2342] p-2.5 shadow-2xl z-20"
                  >
                    <div className="px-3.5 py-2 mb-1.5 border-b border-white/10">
                      <p className="font-mono text-[9px] font-bold tracking-wider text-[#D4A44A] uppercase">
                        Our Specialized Operations
                      </p>
                    </div>
                    <div className="space-y-1">
                      {divisionItems.map((div) => {
                        const Icon = div.icon;
                        const isCurrent = activeSection === div.id;
                        return (
                          <button
                            key={div.id}
                            onClick={() => handleNavigate(div.id)}
                            className="flex w-full items-center gap-3.5 rounded-lg p-2.5 text-left transition-colors focus:outline-none hover:bg-white/5 group"
                            id={`dropdown-item-${div.id}`}
                          >
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all text-white ${isCurrent ? 'scale-105 border-white/30 bg-white/10' : ''}`}>
                              <Icon className="h-5 w-5 text-[#D4A44A]" />
                            </div>
                            <div>
                              <p className={`font-sans text-sm font-semibold transition-colors ${isCurrent ? 'text-[#D4A44A]' : 'text-white'}`}>
                                {div.label}
                              </p>
                              <p className="font-sans text-xs text-white/60 font-light mt-0.5 leading-normal">
                                {div.id === 'engineering' && 'Steel fabrication & welding'}
                                {div.id === 'digital' && 'Growth marketing & SEO'}
                                {div.id === 'deco' && 'Wedding planning & styling'}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => openQuoteModal()}
            className="ml-3 px-5 py-2.5 font-sans text-xs font-bold tracking-widest uppercase rounded-full text-white bg-transparent border-2 border-white hover:bg-white hover:text-[#0A2342] active:scale-95 transition-all shadow-md focus:outline-none cursor-pointer"
            id="nav-quote-btn"
          >
            Request a Quote
          </button>

          <button
            onClick={() => handleNavigate('contact')}
            className="ml-2 px-4 py-2.5 font-sans text-xs font-bold tracking-widest uppercase rounded-full text-white/95 hover:text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none cursor-pointer"
            id="nav-contact-btn"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white md:hidden hover:bg-white/10 active:scale-95 transition-all focus:outline-none"
          id="nav-mobile-menu-toggle"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="border-t border-[#0c2b52] bg-[#0A2342] md:hidden overflow-hidden"
          >
            <div className="grid gap-2 p-5 text-white">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`flex items-center w-full px-4 py-3 rounded-lg font-sans text-sm font-semibold tracking-wide transition-colors ${
                    activeSection === item.id
                      ? 'bg-white/10 text-white'
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                  id={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}

              <div className="h-px bg-white/10 my-2" />
              <div className="px-4 pb-2">
                <p className="font-mono text-[9px] font-bold tracking-wider text-[#D4A44A] uppercase">
                  Divisions
                </p>
              </div>

              {divisionItems.map((div) => {
                const Icon = div.icon;
                return (
                  <button
                    key={div.id}
                    onClick={() => handleNavigate(div.id)}
                    className={`flex items-center gap-3.5 w-full px-4 py-3 rounded-lg font-sans text-sm font-semibold tracking-wide transition-colors ${
                      activeSection === div.id
                        ? 'bg-white/10 text-white'
                        : 'text-white/80 hover:bg-white/5'
                    }`}
                    id={`mobile-nav-${div.id}`}
                  >
                    <Icon className="h-5 w-5 text-[#D4A44A]" />
                    {div.label}
                  </button>
                );
              })}

              <div className="h-px bg-white/10 my-2" />

              <button
                onClick={() => {
                  setIsOpen(false);
                  openQuoteModal();
                }}
                className="flex items-center justify-center w-full mt-2 rounded-full border-2 border-white bg-transparent py-3.5 font-sans text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-[#0A2342] transition-all focus:outline-none cursor-pointer text-center"
                id="mobile-nav-quote"
              >
                Request a Quote
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  handleNavigate('contact');
                }}
                className="flex items-center justify-center w-full mt-2 rounded-full border border-white/20 bg-white/5 py-3.5 font-sans text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-all focus:outline-none cursor-pointer text-center"
                id="mobile-nav-contact"
              >
                Contact & Support
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
