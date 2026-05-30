/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Globe, CheckCircle2, Send, MessageSquare, Facebook, Instagram, ClipboardCheck, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { ContactFormInput, QuoteEstimate } from '../types';

interface ContactSectionProps {
  prefillData: { division: 'engineering' | 'digital' | 'deco' | 'general'; service: string; message: string; budget: string } | null;
  clearPrefill: () => void;
  openQuoteModal: (service?: 'Engineering' | 'Digital Marketing' | 'Event Decoration' | 'General Inquiry') => void;
}

export default function ContactSection({ prefillData, clearPrefill, openQuoteModal }: ContactSectionProps) {
  // Contact Form State
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    division: 'general',
    service: '',
    message: '',
    projectSize: 'medium',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedVoucher, setSubmittedVoucher] = useState<QuoteEstimate | null>(null);

  // Apply prefills if available
  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        division: prefillData.division,
        service: prefillData.service,
        message: prefillData.message,
        budget: prefillData.budget,
      }));
    }
  }, [prefillData]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission after 1.5s
    setTimeout(() => {
      let subtotal = 12500;
      if (formData.budget) {
        const parsed = parseInt(formData.budget.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(parsed) && parsed > 0) {
          subtotal = Math.round(parsed / 1.15); // extract ZAR subtotal
        }
      }

      const vat = Math.round(subtotal * 0.15);
      const total = subtotal + vat;

      const items = [
        { description: `Project Scoping (${formData.service || 'General Consult'})`, cost: Math.round(subtotal * 0.3) },
        { description: `Core Division Resource Logistics (${formData.division.toUpperCase()})`, cost: Math.round(subtotal * 0.5) },
        { description: `Technical Support & South African site coordination`, cost: Math.round(subtotal * 0.2) },
      ];

      const referenceVoucher: QuoteEstimate = {
        id: `TVS-${Math.floor(100000 + Math.random() * 900000)}`,
        subtotal,
        vat,
        total,
        items,
        notes: `Proposal reference is valid for 30 calendar days from today. Email dispatched to ${formData.email} and our Durban coordinator +27 69 404 1961.`,
      };

      setSubmittedVoucher(referenceVoucher);
      setIsSubmitting(false);
      clearPrefill();
    }, 1500);
  };

  const resetForm = () => {
    setSubmittedVoucher(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      division: 'general',
      service: '',
      message: '',
      projectSize: 'medium',
      budget: '',
    });
  };

  const serviceOptions = {
    general: ['', 'Business Partnership Enquiry', 'General Support Request', 'Corporate Account setups'],
    engineering: ['', 'Welding Services repair', 'Structural fabrications frame', 'Premium Membrane carport build', 'Warehouse Mezzanine deck', 'Gate and perimeter fencing'],
    digital: ['', 'Social SMM campaign build', 'E-commerce business web setup', 'Local search SEO optimization', 'Professional DNS Corporate emails', 'Visual performance tracking dashboard'],
    deco: ['', 'Luxury Wedding reception styling', 'Themed Baby shower balloon arch', 'Adult milestone birthday plinths', 'Creative Balloon drop installation', 'Corporate Product Launch backdrop'],
  };

  const selectedOptions = serviceOptions[formData.division] || serviceOptions.general;

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 space-y-24 bg-[#F5F7FA]">
      {/* Introduction */}
      <section className="text-center max-w-3xl mx-auto space-y-4" id="contact-intro">
        <h1 className="font-mono text-[11px] font-bold tracking-widest text-[#0A4DBF] uppercase bg-[#0A4DBF]/10 px-3 py-1 rounded-full inline-block">
          READY TO TALK?
        </h1>
        <h2 className="font-serif-georgia text-3xl sm:text-5xl font-medium tracking-tight text-[#002B6B]">
          Get In Touch
        </h2>
        <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto select-none">
          Contact our specialist South African coordination office today. Let's discuss your physical fabrication structure, brand launch, or upcoming milestone celebration!
        </p>
        <div className="pt-2">
          <button
            onClick={() => openQuoteModal()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A4DBF]/10 border border-[#0A4DBF]/30 text-[#0A4DBF] hover:bg-[#0A4DBF]/20 font-sans text-xs font-bold tracking-wider uppercase transition-all cursor-pointer shadow-sm"
            id="contact-express-quote-trigger"
          >
            ⚡ Launch Express Quote Form
          </button>
        </div>
      </section>

      {/* Main Grid Contact Card and Form */}
      <AnimatePresence mode="wait">
        {!submittedVoucher ? (
          <motion.div
            key="contact-form-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            id="contact-grid"
          >
            {/* Left Column: Coordinates & Social channels */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <span className="block font-serif-georgia text-2xl font-medium text-[#002B6B]">
                  Travis Group
                </span>
                <p className="font-sans text-sm text-gray-600 leading-relaxed font-light select-none">
                  Your trusted South African corporate partner for high-strength Engineering, Digital Growth Marketing, and beautiful custom Wedding & Event Decoration.
                </p>
                <div className="h-px bg-gray-200" />
                <p className="font-sans text-xs text-[#0A4DBF] font-bold tracking-wider uppercase">
                  ⭐ Services Available Throughout All of South Africa
                </p>
              </div>

              {/* Direct Details list */}
              <ul className="space-y-6 font-sans text-sm">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0A4DBF] border border-gray-200 shadow-sm">
                    <Phone className="h-5 w-5 text-[#0A4DBF]" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs uppercase font-bold tracking-wide font-mono">Phone Support</span>
                    <a href="tel:+27694041961" className="font-bold text-[#002B6B] hover:text-[#0A4DBF] transition-colors">
                      +27 69 404 1961
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0A4DBF] border border-gray-200 shadow-sm">
                    <Mail className="h-5 w-5 text-[#0A4DBF]" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs uppercase font-bold tracking-wide font-mono">Email Dispatch</span>
                    <a href="mailto:info@travisgroup.co.za" className="font-bold text-[#002B6B] hover:text-[#0A4DBF] transition-colors">
                      info@travisgroup.co.za
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0A4DBF] border border-gray-200 shadow-sm">
                    <MapPin className="h-5 w-5 text-[#0A4DBF]" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs uppercase font-bold tracking-wide font-mono">Corporate HQ Office</span>
                    <span className="font-bold text-[#002B6B] select-all">
                      Durban, KwaZulu-Natal, South Africa
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0A4DBF] border border-gray-200 shadow-sm">
                    <Globe className="h-5 w-5 text-[#0A4DBF]" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xs uppercase font-bold tracking-wide font-mono">Main Website</span>
                    <a href="http://www.travisgroup.co.za" target="_blank" rel="noopener noreferrer" className="font-bold text-[#002B6B] hover:text-[#0A4DBF] transition-colors">
                      www.travisgroup.co.za
                    </a>
                  </div>
                </li>
              </ul>

              {/* Social Grid Connections */}
              <div className="space-y-4">
                <p className="font-sans text-xs uppercase tracking-wider text-gray-500 font-bold">Social Network Portals</p>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.facebook.com/share/1FxCMe73h4/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white hover:bg-neutral-50 border border-gray-200 p-3.5 rounded-xl text-gray-700 font-sans text-xs transition-colors cursor-pointer shadow-sm"
                  >
                    <Facebook className="h-4.5 w-4.5 text-[#0A4DBF] shrink-0" />
                    <span>Facebook Page</span>
                    <ArrowUpRight className="h-3 w-3 text-gray-400 ml-auto" />
                  </a>

                  <a
                    href="https://www.instagram.com/travis_group?igsh=dWhpcW05anV6bGd5&utm_source=ig_contact_invite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white hover:bg-neutral-50 border border-gray-200 p-3.5 rounded-xl text-gray-700 font-sans text-xs transition-colors cursor-pointer shadow-sm"
                  >
                    <Instagram className="h-4.5 w-4.5 text-[#0A4DBF] shrink-0" />
                    <span>Instagram</span>
                    <ArrowUpRight className="h-3 w-3 text-gray-400 ml-auto" />
                  </a>

                  <a
                    href="https://wa.me/27694041961"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white hover:bg-neutral-50 border border-gray-200 p-3.5 rounded-xl text-gray-700 font-sans text-xs transition-colors col-span-2 cursor-pointer shadow-sm"
                  >
                    <MessageSquare className="h-4.5 w-4.5 text-[#0A4DBF] shrink-0" />
                    <span className="truncate">Instant Chat via WhatsApp Support (+27 69 404 1961)</span>
                    <ArrowUpRight className="h-3 w-3 text-gray-400 ml-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Working Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-sm">
              <div className="space-y-1.5 mb-8">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#0A4DBF] font-bold block">
                  SECURE ESTIMATION REQUEST
                </span>
                <h3 className="font-serif-georgia text-xl font-medium text-[#002B6B]">
                  Request a Free Quote
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-normal">
                  Our standard South African corporate ticketing queue is monitored closely by our administration. We deliver estimates within 24 business hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" id="contact-core-form">
                {/* Name & Email in grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="e.g., Sipho Gumede"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-xl bg-[#F5F7FA] border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="e.g., sipho@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-xl bg-[#F5F7FA] border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Division */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">South Africa Call Line</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      placeholder="e.g., +27 69 404 1961"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-xl bg-[#F5F7FA] border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="division" className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Target Division</label>
                    <select
                      name="division"
                      id="division"
                      value={formData.division}
                      onChange={handleInputChange}
                      className="w-full rounded-xl bg-[#F5F7FA] border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="general">Corporate HQ (General Partnership)</option>
                      <option value="engineering">Travis Group Engineering (Steel/Welds)</option>
                      <option value="digital">Travis Group Digital (Websites/Marketing/SEO)</option>
                      <option value="deco">Travis Deco (Weddings/Balloon installations)</option>
                    </select>
                  </div>
                </div>

                {/* Service of Division & Project Budget bracket */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="service" className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Specific Service Sizing</label>
                    {selectedOptions.length > 1 ? (
                      <select
                        name="service"
                        id="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-xl bg-[#F5F7FA] border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="">-- Choose Segment Service --</option>
                        {selectedOptions.filter(Boolean).map((opt) => (
                           <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        name="service"
                        id="service"
                        required
                        placeholder="e.g. Carport layout / SEO audit"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-xl bg-[#F5F7FA] border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none focus:bg-white transition-colors"
                      />
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Expected Budget Scope</label>
                    <input
                      type="text"
                      name="budget"
                      id="budget"
                      placeholder="e.g. R 15,000"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full rounded-xl bg-[#F5F7FA] border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Design Brief / Project Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    placeholder="Provide details about structural dimensions, ad goals, guest counts, or custom requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full rounded-xl bg-[#F5F7FA] border border-gray-200 text-xs px-4 py-3 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Form submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#002B6B] hover:bg-[#0A4DBF] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full transition-colors focus:outline-none active:scale-95 disabled:opacity-50 disabled:scale-100 cursor-pointer border-none shadow-md"
                  id="contact-form-submit-btn"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Queueing Consultation Ticketing...
                    </span>
                  ) : (
                    <>
                      <Send className="h-4 w-4 text-[#D4A44A]" />
                      Queue My Free Quote Proposal
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="submitted-voucher-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-2xl mx-auto bg-[#001A4D] border border-[#001A4D] text-white rounded-3xl p-8 md:p-12 shadow-xl space-y-8 relative overflow-hidden"
            id="quote-reference-card"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-[#D4A44A]/15 blur-2xl font-sans text-xs" />
            
            {/* Header Voucher */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-white/10">
              <div className="space-y-1">
                <span className="font-mono text-[9px] font-bold text-[#D4A44A] tracking-wider uppercase bg-white/5 px-2.5 py-1 rounded border border-[#D4A44A]/30">
                  ESTIMATE SYSTEM QUEUED
                </span>
                <h4 className="font-serif-georgia text-xl font-medium tracking-tight text-white mt-1.5">
                  Travis Group Quote Ticket
                </h4>
              </div>
              <div className="text-left sm:text-right">
                <span className="block font-mono text-[9px] text-white/50 uppercase">QUOTATION REF</span>
                <span className="block font-sans text-sm font-bold text-white">{submittedVoucher.id}</span>
              </div>
            </div>

            {/* Notification alert */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl flex items-start gap-3.5 animate-pulse">
              <CheckCircle2 className="h-5.5 w-5.5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-sans text-sm font-bold text-white">Consultation Dispatch Complete!</p>
                <p className="font-sans text-xs text-white/85 leading-normal">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>! We have received your request regarding <span className="text-white font-bold">{formData.service}</span>.
                </p>
              </div>
            </div>

            {/* Voucher itemized pricing lines */}
            <div className="space-y-4 font-sans text-xs">
              <p className="font-sans text-xs uppercase tracking-wider text-white/60 font-bold flex items-center gap-2 select-none">
                <ClipboardCheck className="h-4 w-4 text-[#D4A44A]" />
                Line Item Sizing Specifications
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/15 space-y-3 font-mono">
                {submittedVoucher.items.map((it, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4">
                    <span className="text-white/75 truncate max-w-[280px]">{it.description}</span>
                    <span className="text-white shrink-0">R {it.cost.toLocaleString('en-ZA')}</span>
                  </div>
                ))}
                <div className="h-px bg-white/10 my-2" />
                <div className="flex justify-between items-center text-white/65 text-xs">
                  <span>Subtotal:</span>
                  <span>R {submittedVoucher.subtotal.toLocaleString('en-ZA')}</span>
                </div>
                <div className="flex justify-between items-center text-white/65 text-xs">
                  <span>South African VAT (15%):</span>
                  <span>R {submittedVoucher.vat.toLocaleString('en-ZA')}</span>
                </div>
                <div className="h-px bg-white/10 my-2" />
                <div className="flex justify-between items-center text-white text-sm font-bold">
                  <span className="font-sans">Projected Investment:</span>
                  <span className="text-[#D4A44A] text-xl font-serif-georgia">R {submittedVoucher.total.toLocaleString('en-ZA')}</span>
                </div>
              </div>
            </div>

            {/* Notes and Reset form back */}
            <div className="space-y-6 pt-4 border-t border-white/10">
              <p className="font-sans text-xs text-white/70 leading-normal font-light">
                {submittedVoucher.notes}
              </p>
              
              <button
                onClick={resetForm}
                className="inline-flex items-center gap-2 text-[#D4A44A] hover:text-[#D4A44A]/85 font-sans text-xs font-bold uppercase transition-colors focus:outline-none cursor-pointer border-none bg-transparent"
                id="contact-reset-btn"
              >
                <ArrowLeft className="h-4 w-4 text-[#D4A44A]" />
                Create Another Structural / Brand Ticket
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
