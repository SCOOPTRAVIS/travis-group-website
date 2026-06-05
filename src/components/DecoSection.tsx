/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Calendar, GlassWater, Milestone, PartyPopper, Briefcase, ChevronRight, CheckSquare, Heart, Gift, ArrowRight } from 'lucide-react';
import { ActiveSection } from '../types';

interface DecoSectionProps {
  setActiveSection: (section: ActiveSection) => void;
  setContactPrefill: (data: { division: 'deco'; service: string; message: string; budget: string }) => void;
  openQuoteModal: (service?: 'Engineering' | 'Digital Marketing' | 'Event Decoration' | 'General Inquiry') => void;
}

export default function DecoSection({ setActiveSection, setContactPrefill, openQuoteModal }: DecoSectionProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 space-y-24 bg-[#F5F7FA]">
      {/* Intro Header Banner */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="deco-head">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs text-[#0A4DBF] font-bold font-sans uppercase tracking-widest select-none">
            TRAVIS DECO CREATIONS
          </div>
          <h1 className="font-serif-georgia text-3xl sm:text-5xl font-medium tracking-tight text-[#002B6B] leading-tight">
            Creating Beautiful Memories
          </h1>
          <p className="font-sans text-base text-gray-700 leading-relaxed font-light select-none">
            Travis Deco specializes in comprehensive event planning, visual event styling, and professional interior/exterior décor services designed to transform ordinary spaces into unforgettable experiences.
          </p>
          <p className="font-sans text-sm text-gray-600 leading-relaxed select-none">
            Whether you're celebrating a luxury dream wedding reception, milestone baby shower, corporate launch party, or private milestone birthday, our design coordinators bring immaculate creativity, elegance, and extreme attention to detail to every event.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
            <button
              onClick={() => openQuoteModal('Event Decoration')}
              className="px-6 py-3.5 bg-[#002B6B] hover:bg-[#0A4DBF] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-md active:scale-95 transition-all text-center cursor-pointer border-none"
              id="deco-hero-quote-btn"
            >
              Request Deco Quote
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-72 lg:h-96">
          <img
            src="/src/assets/images/deco_hero_1780147760223.png"
            alt="Travis Deco beautiful luxury wedding reception setup"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Services Grid Matrix */}
      <section className="space-y-12" id="deco-matrix">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-mono text-[11px] font-bold tracking-widest text-[#0A4DBF] uppercase bg-[#0A4DBF]/10 px-3 py-1 rounded-full inline-block">
            AESTHETIC PORTFOLIOS
          </h2>
          <h3 className="font-serif-georgia text-2xl sm:text-3xl font-medium text-[#002B6B]">Our Specialty Setup Themes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Wedding Planning & Décor',
              icon: Heart,
              items: ['Full Ceremony Arch styling', 'Romantic floral table setups', 'Premium draped backdrops', 'Gold & Crystal Tableware styling', 'Wedding party plinths & signage', 'Coordination & struck cleanup']
            },
            {
              title: 'Baby Showers',
              icon: Gift,
              items: ['Organic custom color balloon arches', 'Custom text welcome boards', 'Baby boxes block presentation', 'Pastel flower tablescapes', 'Themed cupcakes presentation tables', 'Creative photography zones']
            },
            {
              title: 'Birthday Celebrations',
              icon: PartyPopper,
              items: ['Luxury Adult milestone setups', 'Vibrant Children custom parties', 'Dynamic neon signs backdrops', 'Personalized party favor displays', 'Cocktail area tablescapes', 'Delightful catering displays']
            },
            {
              title: 'Gender Reveal Events',
              icon: Milestone,
              items: ['He or She visual balloon arches', 'Secure balloon drops assemblies', 'Specialized confetti launch cannons', 'Matching boy/girl food counters', 'Fun voting custom board displays', 'Keepsake signature boards styling']
            },
            {
              title: 'Event Styling',
              icon: Sparkles,
              items: ['High-contrast photo booth walls', 'Seasonal themed showcase displays', 'Personalized display panels designs', 'Aesthetic plinths set rentals', 'Corporate step-and-repeat displays', 'Bespoke fabric draping installations']
            },
            {
              title: 'Corporate Events & Galas',
              icon: Briefcase,
              items: ['Clean professional company functions', 'Product launch brand stages design', 'Key speaker podium arrangements', 'Annual celebratory dining drapes', 'Sleek entry tables setups', 'Conference lobby aesthetic displays']
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
