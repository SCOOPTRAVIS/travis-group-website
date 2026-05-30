/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, GlassWater, Milestone, PartyPopper, Briefcase, ChevronRight, CheckSquare, Heart, Gift, ArrowRight } from 'lucide-react';
import { ActiveSection } from '../types';

interface DecoSectionProps {
  setActiveSection: (section: ActiveSection) => void;
  setContactPrefill: (data: { division: 'deco'; service: string; message: string; budget: string }) => void;
  openQuoteModal: (service?: 'Engineering' | 'Digital Marketing' | 'Event Decoration' | 'General Inquiry') => void;
}

export default function DecoSection({ setActiveSection, setContactPrefill, openQuoteModal }: DecoSectionProps) {
  // Visual Planner State
  const [eventType, setEventType] = useState<'wedding' | 'baby_shower' | 'birthday_milestone' | 'gender_reveal' | 'corporate_gala'>('wedding');
  const [guestCount, setGuestCount] = useState<number>(80);
  const [styleLevel, setStyleLevel] = useState<'classic_romantic' | 'luxury_gilded' | 'modern_minimalist'>('classic_romantic');
  const [needsFlorals, setNeedsFlorals] = useState<boolean>(true);
  const [needsBalloons, setNeedsBalloons] = useState<boolean>(true);
  const [needsLighting, setNeedsLighting] = useState<boolean>(true);

  // Math in Rands ZAR
  const calculateDecoBudget = () => {
    let basePricePerGuest = 75; // Class table setup ZAR
    let setupLabels = 'Classic Standard Backdrop';

    if (eventType === 'wedding') {
      basePricePerGuest = 165;
    } else if (eventType === 'baby_shower') {
      basePricePerGuest = 85;
    } else if (eventType === 'birthday_milestone') {
      basePricePerGuest = 95;
    } else if (eventType === 'gender_reveal') {
      basePricePerGuest = 80;
    } else if (eventType === 'corporate_gala') {
      basePricePerGuest = 195;
    }

    let subtotal = guestCount * basePricePerGuest;
    const itemsList: Array<{ label: string; rate: number }> = [
      { label: `Base Tablescaping & Cutlery Linens (${guestCount} guests)`, rate: Math.round(guestCount * basePricePerGuest) }
    ];

    // Style level multiplier
    let styleMultiplier = 1.0;
    if (styleLevel === 'luxury_gilded') {
      styleMultiplier = 1.8;
      itemsList.push({ label: 'Luxury Crystal & Gold Tableware Upgrade', rate: Math.round(subtotal * 0.35) });
    } else if (styleLevel === 'modern_minimalist') {
      styleMultiplier = 0.95;
    }

    subtotal *= styleMultiplier;

    if (needsFlorals) {
      const floralRate = eventType === 'wedding' ? 6500 : 3505;
      itemsList.push({ label: 'Fresh Custom Floral Base arrangements & Plinths', rate: floralRate });
      subtotal += floralRate;
    }

    if (needsBalloons) {
      const balloonRate = eventType === 'baby_shower' || eventType === 'gender_reveal' ? 4500 : 2500;
      itemsList.push({ label: 'Bespoke Organic Balloon Garland Arch Installation', rate: balloonRate });
      subtotal += balloonRate;
    }

    if (needsLighting) {
      const lightingRate = 1800;
      itemsList.push({ label: 'Ambient Fairylights & Table Candle glow bundles', rate: lightingRate });
      subtotal += lightingRate;
    }

    // Add Setup coordination
    const coordinationFee = Math.round(subtotal * 0.12 + 1500);
    itemsList.push({ label: 'On-site Styling set & subsequent striking cleanups', rate: coordinationFee });
    subtotal += coordinationFee;

    const vat = Math.round(subtotal * 0.15);
    const total = subtotal + vat;

    return { subtotal, vat, total, itemsList };
  };

  const { subtotal, vat, total, itemsList } = calculateDecoBudget();

  const handleExportDeco = () => {
    const eventLabels = {
      wedding: 'Wedding Planning & Styling',
      baby_shower: 'Custom Themed Baby Shower',
      birthday_milestone: 'Luxury Birthday Celebration',
      gender_reveal: 'Creative Gender Reveal Event',
      corporate_gala: 'High-end Corporate Function',
    };

    const styleLabels = {
      classic_romantic: 'Classic Romantic styling (Blush Rose, Cream)',
      luxury_gilded: 'Luxury Gilded setup (Gold ware, crystal, plinths)',
      modern_minimalist: 'Modern Minimalist layout (Clean shapes, foliage)',
    };

    setContactPrefill({
      division: 'deco',
      service: `Custom Event Styling Consultation`,
      message: `Hi Travis Deco, I modeled my celebration layout using your web planner:\n- Event Theme: ${eventLabels[eventType]}\n- Guest Target Count: ${guestCount} people\n- Styling Preference: ${styleLabels[styleLevel]}\n- Inclusions: ${needsFlorals ? 'Fresh Florals' : 'None'}, ${needsBalloons ? 'Balloon Installations' : 'None'}, ${needsLighting ? 'Candle/Fairy Lighting' : 'None'}\n- Calculated budget range: R${total.toLocaleString('en-ZA')}`,
      budget: `R${Math.round(total / 1000) * 1000}`,
    });
    setActiveSection('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <button
              onClick={() => {
                const element = document.getElementById('deco-calculator');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 1250, behavior: 'smooth' });
                }
              }}
              className="px-6 py-3.5 border-2 border-[#002B6B] bg-white text-[#002B6B] font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-sm hover:bg-neutral-50 active:scale-95 transition-all text-center cursor-pointer"
            >
              Visual Planner
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

      {/* Interactive Visual Planner & Budgeting tool */}
      <section className="border border-gray-200 bg-white rounded-3xl overflow-hidden shadow-sm" id="deco-calculator">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Controls Form */}
          <div className="lg:col-span-7 p-8 md:p-12 space-y-8 bg-[#F5F7FA] text-gray-800">
            <div className="space-y-2">
              <span className="font-mono text-[9px] font-bold text-[#0A4DBF] tracking-wider uppercase border border-gray-200 px-2.5 py-1 rounded bg-white">
                INTERACTIVE BUDGET PLANNER
              </span>
              <h2 className="font-serif-georgia text-2xl text-[#002B6B] tracking-tight font-medium mt-1">
                Deco Coordination & Styling Cost Estimator
              </h2>
              <p className="font-sans text-xs text-gray-600 leading-normal font-light">
                Model pricing for tablescaping, backdrops, coordination, and floral setups. Refine your client guest volumes below.
              </p>
            </div>

            <div className="space-y-6">
              {/* Event selection */}
              <div className="space-y-2.5">
                <label className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Occasion Framework</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'wedding', label: 'Bespoke Wedding' },
                    { id: 'baby_shower', label: 'Themed Baby Shower' },
                    { id: 'birthday_milestone', label: 'Luxury Birthday' },
                    { id: 'gender_reveal', label: 'Gender Reveal' },
                    { id: 'corporate_gala', label: 'Corporate Dinner' },
                  ].map((et) => (
                    <button
                      key={et.id}
                      onClick={() => setEventType(et.id as any)}
                      className={`text-left p-3 rounded-lg border text-xs font-semibold select-none transition-colors duration-150 cursor-pointer ${
                        eventType === et.id
                          ? 'bg-[#002B6B] text-white border-[#002B6B]'
                          : 'bg-white border-gray-200 text-[#002B6B] hover:border-[#0A4DBF]'
                      }`}
                    >
                      {et.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Slider */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs text-[#002B6B] font-bold uppercase tracking-wider block mb-1">
                  <span>Guest / Seats Volume</span>
                  <span className="text-[#0A4DBF] font-mono text-xs font-bold">{guestCount} Expected Guests</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="350"
                  step="10"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-gray-200 appearance-none cursor-pointer accent-[#0A4DBF]"
                />
                <p className="font-mono text-[9px] text-gray-500 flex justify-between font-light">
                  <span>Min: 20 guests</span>
                  <span>Mid: 180 guests</span>
                  <span>Max: 350 guests</span>
                </p>
              </div>

              {/* Theme aesthetic option & design checkboxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Styling Accent Level</label>
                  <select
                    value={styleLevel}
                    onChange={(e: any) => setStyleLevel(e.target.value)}
                    className="w-full rounded-lg bg-white border border-gray-200 text-xs px-3.5 py-2.5 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none cursor-pointer"
                  >
                    <option value="classic_romantic">Classic Romantic (Beautiful Blush, Ivory & Glassware)</option>
                    <option value="luxury_gilded">Luxury Gilded Elegant (Crystal, Rich Goldware additions)</option>
                    <option value="modern_minimalist">Modern Minimalist clean styling (Natural Eucalyptus & Silvers)</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Decoration Additions</label>
                  <div className="space-y-2 font-sans text-xs text-gray-700 select-none">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={needsFlorals}
                        onChange={(e) => setNeedsFlorals(e.target.checked)}
                        className="rounded accent-[#0A4DBF] h-4 w-4 text-[#0A4DBF]"
                      />
                      <span>Fresh Floral Arrangements plinths</span>
                    </label>

                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={needsBalloons}
                        onChange={(e) => setNeedsBalloons(e.target.checked)}
                        className="rounded accent-[#0A4DBF] h-4 w-4 text-[#0A4DBF]"
                      />
                      <span>Organic Balloon Garland arch installs</span>
                    </label>

                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={needsLighting}
                        onChange={(e) => setNeedsLighting(e.target.checked)}
                        className="rounded accent-[#0A4DBF] h-4 w-4 text-[#0A4DBF]"
                      />
                      <span>Ambient Candles & Fairy lights pack</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price output summary panel - Dark Navy background */}
          <div className="lg:col-span-5 bg-[#001A4D] text-white p-8 md:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 select-none">
            <div className="space-y-8">
              <div className="pb-4 border-b border-white/10">
                <h3 className="font-mono text-[9px] font-bold text-[#D4A44A] tracking-wider uppercase">EVENT PLAN ESTIMATE</h3>
                <p className="font-sans text-sm text-white/70 mt-1 font-medium">Bespoke Styling Sizing Budget</p>
              </div>

              {/* Budget Total ZAR */}
              <div className="space-y-1">
                <p className="font-sans text-xs text-white/60 font-semibold uppercase tracking-wider">Projected Cost (Total Incl. VAT)</p>
                <p className="font-sans text-3xl sm:text-4xl font-black text-white tracking-tight">
                  R {total.toLocaleString('en-ZA')}
                </p>
                <p className="font-mono text-[10px] text-white/50">Price accounts for Durban/KZN standard vendor deliveries.</p>
              </div>

              {/* Itemized checklist items */}
              <div className="space-y-3.5 bg-white/5 p-4.5 rounded-xl border border-white/10 font-sans">
                <p className="font-sans text-xs text-[#D4A44A] font-bold tracking-wider uppercase">Itemized Design Specifications</p>
                <div className="space-y-2 text-[11px]">
                  {itemsList.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start gap-4">
                      <span className="text-white/75 truncate max-w-[210px]">{item.label}</span>
                      <span className="text-white shrink-0 font-mono font-semibold">R {item.rate.toLocaleString('en-ZA')}</span>
                    </div>
                  ))}
                  <div className="h-px bg-white/10 my-2" />
                  <div className="flex justify-between items-center text-xs text-white/65 font-medium">
                    <span>VAT Estimation (15%)</span>
                    <span className="font-mono font-bold font-semibold">R {vat.toLocaleString('en-ZA')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={handleExportDeco}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#D4A44A] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#D4A44A]/90 transition-all cursor-pointer focus:outline-none border-none shadow-lg text-center"
                id="deco-export-estimate-btn"
              >
                Apply Details to Quote Builder
                <ArrowRight className="h-4.5 w-4.5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
