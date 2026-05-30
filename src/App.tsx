/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import EngineeringSection from './components/EngineeringSection';
import DigitalSection from './components/DigitalSection';
import DecoSection from './components/DecoSection';
import ContactSection from './components/ContactSection';
import RequestQuoteModal from './components/RequestQuoteModal';
import { ActiveSection } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [contactPrefill, setContactPrefill] = useState<{
    division: 'engineering' | 'digital' | 'deco' | 'general';
    service: string;
    message: string;
    budget: string;
  } | null>(null);

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<'Engineering' | 'Digital Marketing' | 'Event Decoration' | 'General Inquiry'>('General Inquiry');

  const openQuoteModal = (service?: 'Engineering' | 'Digital Marketing' | 'Event Decoration' | 'General Inquiry') => {
    if (service) {
      setSelectedQuoteService(service);
    } else {
      setSelectedQuoteService('General Inquiry');
    }
    setIsQuoteModalOpen(true);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutSection setActiveSection={setActiveSection} />;
      case 'services':
        return <ServicesSection setActiveSection={setActiveSection} openQuoteModal={openQuoteModal} />;
      case 'engineering':
        return (
          <EngineeringSection
            setActiveSection={setActiveSection}
            setContactPrefill={setContactPrefill}
            openQuoteModal={openQuoteModal}
          />
        );
      case 'digital':
        return (
          <DigitalSection
            setActiveSection={setActiveSection}
            setContactPrefill={setContactPrefill}
            openQuoteModal={openQuoteModal}
          />
        );
      case 'deco':
        return (
          <DecoSection
            setActiveSection={setActiveSection}
            setContactPrefill={setContactPrefill}
            openQuoteModal={openQuoteModal}
          />
        );
      case 'contact':
        return (
          <ContactSection
            prefillData={contactPrefill}
            clearPrefill={() => setContactPrefill(null)}
            openQuoteModal={openQuoteModal}
          />
        );
      default:
        return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col selection:bg-brand-accent selection:text-white" id="app-root-container">
      {/* Dynamic Header Navbar navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} openQuoteModal={openQuoteModal} />

      {/* Primary Transition Stage */}
      <main className="flex-1 w-full" id="main-content-flow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="w-full h-full"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Structured Footer */}
      <Footer setActiveSection={setActiveSection} openQuoteModal={openQuoteModal} />

      {/* Express 'Request a Quote' Modal Form */}
      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={selectedQuoteService}
      />
    </div>
  );
}

