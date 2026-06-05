/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Hammer, Warehouse, Factory, Home, Tractor, CreditCard, ChevronRight } from 'lucide-react';
import { ActiveSection } from '../types';

interface EngineeringSectionProps {
  setActiveSection: (section: ActiveSection) => void;
  setContactPrefill: (data: { division: 'engineering'; service: string; message: string; budget: string }) => void;
  openQuoteModal: (service?: 'Engineering' | 'Digital Marketing' | 'Event Decoration' | 'General Inquiry') => void;
}

export default function EngineeringSection({ setActiveSection, setContactPrefill, openQuoteModal }: EngineeringSectionProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 space-y-24 bg-[#F5F7FA]">
      {/* Detail Header Banner */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="engineering-head">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs text-[#0A4DBF] font-bold font-sans uppercase tracking-widest select-none">
            TRAVIS GROUP ENGINEERING
          </div>
          <h1 className="font-serif-georgia text-3xl sm:text-5xl font-medium tracking-tight text-[#002B6B] leading-tight">
            Engineering Solutions Built to Last
          </h1>
          <p className="font-sans text-base text-gray-700 leading-relaxed font-light select-none">
            Travis Group Engineering provides professional engineering, metal fabrication, and certified welding services for commercial, industrial, agricultural, and residential clients across South Africa.
          </p>
          <p className="font-sans text-sm text-gray-600 leading-relaxed select-none">
            Our experienced architectural fabrication and engineering team specializes in delivering high-strength, premium-grade steel structures and products custom-measured exactly to suit our local client specifications.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
            <button
              onClick={() => openQuoteModal('Engineering')}
              className="px-6 py-3.5 bg-[#002B6B] hover:bg-[#0A4DBF] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-md active:scale-95 transition-all text-center cursor-pointer border-none"
              id="engineering-hero-quote-btn"
            >
              Request Engineering Quote
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-72 lg:h-96">
          <img
            src="/src/assets/images/engineering_hero_1780147719930.png"
            alt="Travis Group industrial welding fabrication"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Services List matrix */}
      <section className="space-y-12" id="engineering-matrix">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-mono text-[11px] font-bold tracking-widest text-[#0A4DBF] uppercase bg-[#0A4DBF]/10 px-3 py-1 rounded-full inline-block">
            CERTIFIED CAPABILITIES
          </h2>
          <h3 className="font-serif-georgia text-2xl sm:text-3xl font-medium text-[#002B6B]">Our Specialty Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Welding Services',
              items: ['Certified Arc Welding', 'High-strength MIG Welding', 'Precision TIG Welding', 'Stainless Steel Jointing', 'Heavy Structural Welding', 'On-site Metal Repairs'],
              bg: 'bg-[#002B6B] text-white border-[#001A4D]'
            },
            {
              title: 'Fabrication Services',
              items: ['Custom Steel Assemblies', 'Heavy Structural Frames', 'Industrial Machinery Bases', 'Agricultural Barn Support', 'Manufacturing Steel Parts', 'Architectural Features'],
              bg: 'bg-white text-gray-800 border-gray-200'
            },
            {
              title: 'Structural Solutions',
              items: ['Premium Tensile Membrane Carports', 'Standard Sheet Metal Carports', 'Ornate and Modern Balustrades', 'Structural Steel Staircases', 'Warehouse Mezzanine Floors', 'High-security Gates & Fences'],
              bg: 'bg-white text-gray-800 border-gray-200'
            },
            {
              title: 'Maintenance Services',
              items: ['Warehouse Facilities Audit', 'Industrial Frame Re-reinforcement', 'Structural Joint Maintenance', 'Preventative Coating Protection', 'Emergency Weld Repairs', 'Facility Plant Servicing'],
              bg: 'bg-white text-gray-800 border-gray-200'
            }
          ].map((cluster, cIdx) => (
            <div key={cIdx} className={`rounded-2xl border p-6 shadow-sm transition-all hover:translate-y-[-4px] hover:shadow-lg duration-300 ${cluster.bg}`}>
              <h3 className="font-serif-georgia text-base font-semibold mb-4 border-b pb-2 border-slate-200">{cluster.title}</h3>
              <ul className="space-y-2.5 font-sans text-xs">
                {cluster.items.map((it, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ChevronRight className={`h-3.5 w-3.5 shrink-0 ${cluster.bg.includes('bg-white') ? 'text-[#0A4DBF]' : 'text-[#D4A44A]'}`} />
                    <span className="opacity-90">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve dashboard */}
      <section className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 space-y-10" id="engineering-industries">
        <div className="max-w-2xl select-none">
          <h2 className="font-mono text-[9px] font-bold tracking-widest text-[#0A4DBF] uppercase bg-[#0A4DBF]/10 px-3 py-1 rounded-full inline-block">CROSS-SECTOR MOBILIZATION</h2>
          <h3 className="font-serif-georgia text-2xl md:text-3xl font-medium text-[#002B6B] mt-3">Industries We Pridefully Serve</h3>
          <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">
            No engineering structure is too challenging. We tailor fabrication specs to provide perfect load compliance and safety bounds for numerous applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: 'Commercial', icon: Warehouse, desc: 'Secure retail storage and carports' },
            { name: 'Industrial', icon: Factory, desc: 'Plant machinery mounts & framework' },
            { name: 'Residential', icon: Home, desc: 'Bespoke residential security gate & carports' },
            { name: 'Agricultural', icon: Tractor, desc: 'Barn heavy steel frames & pens' },
            { name: 'Retail', icon: CreditCard, desc: 'Internal display frameworks & platforms' },
            { name: 'Warehousing', icon: Warehouse, desc: 'High load Mezzanine deck structures' },
          ].map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div key={i} className="bg-[#F5F7FA] p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A4DBF]/10 text-[#0A4DBF] border border-gray-200/50">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-sans text-xs font-bold text-[#002B6B] leading-tight">{ind.name}</h4>
                <p className="font-sans text-[10px] text-gray-500 mt-1 leading-normal">{ind.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
