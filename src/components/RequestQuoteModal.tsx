/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, MapPin, User, Mail, Phone, ChevronRight } from 'lucide-react';
import travisLogo from '../assets/images/travis_group_logo_1780153588610.png';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: 'Engineering' | 'Digital Marketing' | 'Event Decoration' | 'General Inquiry';
}

export default function RequestQuoteModal({ isOpen, onClose, defaultService = 'General Inquiry' }: RequestQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    location: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketRef, setTicketRef] = useState('');

  // Reset or prefill form when modal is opened
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: defaultService,
        location: '',
        description: '',
      });
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen, defaultService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate backend pricing/estimate logger response
    setTimeout(() => {
      const ref = `RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketRef(ref);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  // Close when pressing Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A2342]/80 backdrop-blur-sm"
            id="quote-modal-backdrop"
          />

          {/* Modal Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-gray-200 bg-[#F5F7FA] p-6 sm:p-8 shadow-2xl z-10"
            id="quote-modal-card"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0A2342] hover:bg-gray-100 transition-colors cursor-pointer select-none"
              aria-label="Close quote modal"
              id="quote-modal-close-btn"
            >
              <X className="h-4 w-4" />
            </button>

            {!isSuccess ? (
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="select-none mb-2">
                    <img
                      src={travisLogo}
                      alt="Travis Group Logo"
                      className="h-10 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif-georgia text-xl font-semibold tracking-tight text-[#0A2342]">
                      Request a Quote
                    </h2>
                    <p className="font-sans text-xs text-gray-500 leading-normal mt-1">
                      Please outline your project details. We deliver customized pricing and design consultations within 24 operational hours.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" id="request-quote-form">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="modal-name" className="flex items-center gap-1.5 font-sans text-xs font-bold text-[#0A2342] uppercase tracking-wider">
                      <User className="h-3.5 w-3.5 text-[#0A4DBF]" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="modal-name"
                      required
                      placeholder="e.g., Sipho Gumede"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-white border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none transition-shadow"
                    />
                  </div>

                  {/* Contact Info Fields (Email & Phone Grid) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="modal-email" className="flex items-center gap-1.5 font-sans text-xs font-bold text-[#0A2342] uppercase tracking-wider">
                        <Mail className="h-3.5 w-3.5 text-[#0A4DBF]" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="modal-email"
                        required
                        placeholder="e.g., sipho@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-white border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none transition-shadow"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="modal-phone" className="flex items-center gap-1.5 font-sans text-xs font-bold text-[#0A2342] uppercase tracking-wider">
                        <Phone className="h-3.5 w-3.5 text-[#0A4DBF]" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="modal-phone"
                        required
                        placeholder="e.g., +27 69 404 1961"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-white border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none transition-shadow"
                      />
                    </div>
                  </div>

                  {/* Location & Service Selection Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="modal-service" className="font-sans text-xs font-bold text-[#0A2342] uppercase tracking-wider block">
                        Interested Service
                      </label>
                      <select
                        name="service"
                        id="modal-service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-white border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none transition-shadow cursor-pointer"
                      >
                        <option value="Engineering">Engineering</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Event Decoration">Event Decoration</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="modal-location" className="flex items-center gap-1.5 font-sans text-xs font-bold text-[#0A2342] uppercase tracking-wider">
                        <MapPin className="h-3.5 w-3.5 text-[#0A4DBF]" />
                        Your Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="modal-location"
                        required
                        placeholder="e.g., Durban, KZN"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-white border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none transition-shadow"
                      />
                    </div>
                  </div>

                  {/* Project Description Needs */}
                  <div className="space-y-1.5">
                    <label htmlFor="modal-description" className="font-sans text-xs font-bold text-[#0A2342] uppercase tracking-wider block">
                      Project Description & Needs
                    </label>
                    <textarea
                      name="description"
                      id="modal-description"
                      required
                      rows={3}
                      placeholder="Briefly describe your structural, branding, or celebratory event goals..."
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-white border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none transition-shadow resize-none"
                    />
                  </div>

                  {/* Submission row */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#0A2342] hover:bg-[#0A4DBF] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full transition-all focus:outline-none active:scale-98 disabled:opacity-50 disabled:scale-100 cursor-pointer border-none shadow-md"
                      id="quote-modal-submit-btn"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing Quotation...
                        </span>
                      ) : (
                        <>
                          <Send className="h-4 w-4 text-[#D4A44A]" />
                          Submit Quote Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Confirmation View */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4 text-center space-y-6"
                id="quote-modal-success"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif-georgia text-2xl font-semibold text-[#0A2342]">
                    Quote Submission Received!
                  </h3>
                  <p className="font-sans text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                    Thank you for requesting a quote, <span className="font-bold text-[#0A2342]">{formData.name}</span>. Your dispatch has been logged in our South African regional service system.
                  </p>
                </div>

                {/* Info Card Summary */}
                <div className="bg-white border border-gray-200 rounded-2xl p-4 text-left space-y-3 font-sans text-xs max-w-sm mx-auto shadow-sm">
                  <div className="flex justify-between border-b border-gray-100 pb-2 font-mono text-[10px] text-gray-500">
                    <span>STATUS: ASSIGNED</span>
                    <span className="font-bold text-[#D4A44A]">{ticketRef}</span>
                  </div>
                  <div className="space-y-1 text-gray-600 font-light">
                    <div className="flex justify-between">
                      <span className="font-medium text-[#0A2342]">Interested Service:</span>
                      <span className="text-[#0A4DBF] font-bold">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-[#0A2342]">Contact Email:</span>
                      <span>{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-[#0A2342]">Deployment Location:</span>
                      <span>{formData.location}</span>
                    </div>
                  </div>
                </div>

                <p className="font-sans text-[11px] text-gray-500 max-w-xs mx-auto leading-normal">
                  A representative from our team will contact you at <span className="font-semibold text-[#0A2342]">{formData.phone}</span> shortly to refine structural schedules and budgets.
                </p>

                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 border-2 border-[#0A2342] hover:bg-[#0A2342] hover:text-white text-[#0A2342] bg-white font-sans text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-150 cursor-pointer select-none"
                    id="quote-modal-ok-btn"
                  >
                    Return to Page
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
