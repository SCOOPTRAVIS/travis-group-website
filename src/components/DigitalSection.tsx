/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cpu, Smartphone, Search, TrendingUp, MailCheck, BarChart4, ChevronRight, PieChart, Users, Laptop, ArrowRight } from 'lucide-react';
import { ActiveSection } from '../types';

interface DigitalSectionProps {
  setActiveSection: (section: ActiveSection) => void;
  setContactPrefill: (data: { division: 'digital'; service: string; message: string; budget: string }) => void;
  openQuoteModal: (service?: 'Engineering' | 'Digital Marketing' | 'Event Decoration' | 'General Inquiry') => void;
}

export default function DigitalSection({ setActiveSection, setContactPrefill, openQuoteModal }: DigitalSectionProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 space-y-24 bg-[#F5F7FA]">
      {/* Intro Header */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="digital-head">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs text-[#0A4DBF] font-bold font-sans uppercase tracking-widest select-none">
            TRAVIS GROUP DIGITAL
          </div>
          <h1 className="font-serif-georgia text-3xl sm:text-5xl font-medium tracking-tight text-[#002B6B] leading-tight">
            Helping Businesses Grow Online
          </h1>
          <p className="font-sans text-base text-gray-700 leading-relaxed font-light select-none">
            Travis Group Digital helps businesses increase their online visibility, attract more qualified leads, and grow sales through modern strategic digital marketing and bespoke corporate website design & engineering.
          </p>
          <p className="font-sans text-sm text-gray-600 leading-relaxed select-none">
            In today's fast-paced digital economy, your online brand presence is often the very first engagement point clients have with you. Our specialized mission is to ensure that impression is powerful, credible, and highly profitable.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
            <button
              onClick={() => openQuoteModal('Digital Marketing')}
              className="px-6 py-3.5 bg-[#002B6B] hover:bg-[#0A4DBF] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-md active:scale-95 transition-all text-center cursor-pointer border-none"
              id="digital-hero-quote-btn"
            >
              Request Digital Quote
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-72 lg:h-96">
          <img
            src="/src/assets/images/digital_hero_1780147738366.png"
            alt="Travis Group website development digital marketing dashboard"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Services List Matrix */}
      <section className="space-y-12" id="digital-matrix">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-mono text-[11px] font-bold tracking-widest text-[#0A4DBF] uppercase bg-[#0A4DBF]/10 px-3 py-1 rounded-full inline-block">
            GROWTH MULTIPLIERS
          </h2>
          <h3 className="font-serif-georgia text-2xl sm:text-3xl font-medium text-[#002B6B]">Our Specialty Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Social Media Marketing',
              icon: Users,
              items: ['Facebook Marketing & Branding', 'Instagram Content Scheduling', 'LinkedIn Lead Sourcing', 'Stunning Post Graphic Templates', 'Professional Account Page Management', 'Paid Ad Budget Optimization']
            },
            {
              title: 'Website Development',
              icon: Laptop,
              items: ['Business Brand Portals', 'Advanced E-Commerce Storefronts', 'Conversion Focused Landing Pages', 'Consistent Code Maintenance', 'High-speed Mobile Fluidity', 'Secure Customer Forms Handlers']
            },
            {
              title: 'Search Optimization (SEO)',
              icon: Search,
              items: ['Google First-Page Tactics', 'South Africa & Durban Local SEO', 'Rigorous Key Phrase Audits', 'Performance Speed Optimizations', 'Structured Schema Implementation', 'Competitor Keyword Leak Discovery']
            },
            {
              title: 'Branding & Growth',
              icon: TrendingUp,
              items: ['Signature Brand Identity design', 'Marketing Scenarios Consultation', 'Digital Customer funnels blueprint', 'Incentive lead captures systems', 'Competitor Brand positioning map', 'Scalable South African campaigns']
            },
            {
              title: 'Professional communications',
              icon: MailCheck,
              items: ['Secure Professional Business Emails', 'Seamless DNS Alignment support', 'Google Workspace Account Setup', 'Team Shared Inbox configurations', 'Encrypted Business Emails', 'Reliable Domain Mail flow integration']
            },
            {
              title: 'Analytics & Reporting',
              icon: BarChart4,
              items: ['Visual performance dashboards', 'Continuous visitor behavior maps', 'Lead Tracking & event listeners', 'Conversion cost calculation logs', 'Direct ROI mapping reports', 'Periodic business strategy reviews']
            },
          ].map((cluster, cIdx) => {
            const Icon = cluster.icon;
            return (
              <div key={cIdx} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm transition-all hover:shadow-lg duration-300 hover:translate-y-[-4px] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-[#F5F7FA] text-[#0A4DBF]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif-georgia text-base font-semibold text-[#002B6B]">{cluster.title}</h3>
                  <ul className="space-y-2 border-t border-slate-100 pt-3">
                    {cluster.items.map((it, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 font-light font-sans text-xs">
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#0A4DBF] mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
