/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { ActiveSection } from '../types';
import travisLogo from '../assets/images/travis_group_logo_1780153588610.png';

interface FooterProps {
  setActiveSection: (section: ActiveSection) => void;
  openQuoteModal: (service?: 'Engineering' | 'Digital Marketing' | 'Event Decoration' | 'General Inquiry') => void;
}

export default function Footer({ setActiveSection, openQuoteModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavigate = (section: ActiveSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06152B] text-white/80 border-t border-white/10">
      {/* Top CTA Banner */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 bg-[#0A2342] rounded-2xl p-8 border border-white/10 text-white shadow-xl">
          <div className="space-y-2">
            <h3 className="font-serif-georgia text-2xl font-medium tracking-tight text-white italic">
              Ready to start your next South African project?
            </h3>
            <p className="font-sans text-sm text-white/85 max-w-2xl leading-relaxed">
              Whether you need industrial-grade steel fabrication, digital brand strategy, or exquisite custom event styling, our specialized divisions are ready to help.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal()}
            className="self-start md:self-auto flex items-center gap-2 px-6 py-3.5 bg-[#D4A44A] hover:bg-[#D4A44A]/90 text-white font-sans text-xs font-bold uppercase tracking-widest rounded-full active:scale-95 transition-all shadow-md cursor-pointer border-none"
            id="footer-quote-cta"
          >
            Request Free Quote
            <ArrowUpRight className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>

      {/* Main Grid Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-white/80">
        {/* Brand & Mission Statement */}
        <div className="space-y-6">
          <div className="select-none">
            <img
              src={travisLogo}
              alt="Travis Group Logo"
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="font-sans text-xs leading-relaxed text-white/75">
            A trusted diversified South African company delivering premium solutions across Engineering, Digital Marketing, and Event Decoration. Built on excellence and integrity in Durban, KZN.
          </p>
          {/* Social icons are white as requested */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.facebook.com/share/1FxCMe73h4/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:border-[#D4A44A] hover:text-[#D4A44A] transition-all"
              title="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/travis_group?igsh=dWhpcW05anV6bGd5&utm_source=ig_contact_invite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:border-[#D4A44A] hover:text-[#D4A44A] transition-all"
              title="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/27694041961"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:border-[#D4A44A] hover:text-[#D4A44A] transition-all"
              title="Contact us via WhatsApp"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Divisions Links */}
        <div className="space-y-6">
          <h4 className="font-mono text-[10px] font-bold tracking-wider text-white uppercase border-l-2 border-[#D4A44A] pl-3">
            Our Divisions
          </h4>
          <ul className="space-y-3 font-sans text-xs">
            <li>
              <button
                onClick={() => handleNavigate('engineering')}
                className="hover:text-[#D4A44A] text-white/85 transition-colors focus:outline-none cursor-pointer text-left"
              >
                Travis Group Engineering
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('digital')}
                className="hover:text-[#D4A44A] text-white/85 transition-colors focus:outline-none cursor-pointer text-left"
              >
                Travis Group Digital
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('deco')}
                className="hover:text-[#D4A44A] text-white/85 transition-colors focus:outline-none cursor-pointer text-left"
              >
                Travis Deco
              </button>
            </li>
          </ul>
        </div>

        {/* Quick Company Links */}
        <div className="space-y-6">
          <h4 className="font-mono text-[10px] font-bold tracking-wider text-white uppercase border-l-2 border-[#D4A44A] pl-3">
            Navigation
          </h4>
          <ul className="space-y-3 font-sans text-xs">
            <li>
              <button
                onClick={() => handleNavigate('home')}
                className="hover:text-[#D4A44A] text-white/85 transition-colors focus:outline-none cursor-pointer text-left"
              >
                Home Page
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('about')}
                className="hover:text-[#D4A44A] text-white/85 transition-colors focus:outline-none cursor-pointer text-left"
              >
                About Travis Group
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('services')}
                className="hover:text-[#D4A44A] text-white/85 transition-colors focus:outline-none cursor-pointer text-left"
              >
                Services Overview
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('contact')}
                className="hover:text-[#D4A44A] text-white/85 transition-colors focus:outline-none cursor-pointer text-left"
              >
                Contact & Support
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info Overview */}
        <div className="space-y-6">
          <h4 className="font-mono text-[10px] font-bold tracking-wider text-white uppercase border-l-2 border-[#D4A44A] pl-3">
            Head Office
          </h4>
          <ul className="space-y-3.5 font-sans text-xs text-white/85">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-[#D4A44A] mt-0.5" />
              <span>
                Durban, KwaZulu-Natal,<br />South Africa
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-[#D4A44A]" />
              <a href="tel:+27694041961" className="hover:text-[#D4A44A] transition-colors">
                +27 69 404 1961
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-[#D4A44A]" />
              <a href="mailto:info@travisgroup.co.za" className="hover:text-[#D4A44A] transition-colors">
                info@travisgroup.co.za
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Globe className="h-4 w-4 shrink-0 text-[#D4A44A]" />
              <a href="http://www.travisgroup.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A44A] transition-colors">
                www.travisgroup.co.za
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright/Footer Bottom */}
      <div className="bg-[#051122] py-6 text-center text-[11px] text-white/70 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row md:justify-between items-center gap-4">
          <p>
            © {currentYear} Travis Group (Pty) Ltd. South Africa. All Rights Reserved.
          </p>
          <p className="font-mono text-[9px] tracking-widest text-[#D4A44A] font-bold uppercase">
            Designed to Build, Grow, and Celebrate
          </p>
        </div>
      </div>
    </footer>
  );
}
