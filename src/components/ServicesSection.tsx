/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Hammer, Cpu, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { ActiveSection } from '../types';

interface ServicesSectionProps {
  setActiveSection: (section: ActiveSection) => void;
  openQuoteModal: (service?: 'Engineering' | 'Digital Marketing' | 'Event Decoration' | 'General Inquiry') => void;
}

export default function ServicesSection({ setActiveSection, openQuoteModal }: ServicesSectionProps) {
  const divisions = [
    {
      id: 'engineering',
      name: 'Travis Group Engineering',
      slogan: 'Heavy fabrication & structural engineering built to stand the test of time.',
      topics: [
        { label: 'Precision Welding Services', items: ['Arc, MIG & TIG Welding', 'Stainless Steel, Structural Steel', 'General Metal repairs & reinforcements'] },
        { label: 'Steel Fabrication', items: ['Custom structures', 'Warehouse steel solutions', 'Industrial and Agricultural assemblies'] },
        { label: 'Structural Installations', items: ['Premium Tensile Membrane Carports', 'Balustrades & staircases', 'Gates and secure perimeter fencing'] },
        { label: 'Maintenance Programs', items: ['Warehouse maintenance', 'Preventative structural programs', 'Industrial plant repair works'] },
      ],
      icon: Hammer,
      btnText: 'Open Engineering Hub & Sizing Calculator',
    },
    {
      id: 'digital',
      name: 'Travis Group Digital',
      slogan: 'Strategic digital branding, coding and performance growth marketing.',
      topics: [
        { label: 'Social Media Marketing', items: ['SMM across Meta & LinkedIn', 'Paid advertising setups', 'Branded templates creation'] },
        { label: 'Corporate Website & Web Dev', items: ['Responsive company web design', 'High performance e-commerce', 'Workspace Landing Pages development'] },
        { label: 'Search Optimization (SEO)', items: ['Key phrase research', 'On-page technical structural audits', 'Durban & South Africa Local Google visibility'] },
        { label: 'Google Workspace Setup', items: ['Professional business emails configuration', 'Identity settings setup', 'Secure cloud storage collaboration'] },
      ],
      icon: Cpu,
      btnText: 'Open Digital Hub & ROI Estimator',
    },
    {
      id: 'deco',
      name: 'Travis Deco',
      slogan: 'Award-winning milestone coordination and bespoke reception visual styling.',
      topics: [
        { label: 'Wedding Styling & Décor', items: ['Floral setups', 'Reception tablescaping', 'Backdrop frame assemblies & ceremonial drapes'] },
        { label: 'Baby Showers & Birthdays', items: ['Custom-theme colors', 'Luxury balloon organic styling', 'Welcome signage display tables'] },
        { label: 'Gender Reveal Concept Events', items: ['Creative setups', 'Balloon drop installations', 'Photography-ready backdrops'] },
        { label: 'Corporate Event Styling', items: ['Conferences setups', 'Product launch brand backdrops', 'Aesthetic business galas'] },
      ],
      icon: Sparkles,
      btnText: 'Open Deco Hub & Sizing Planner',
    },
  ];

  const handleNavigate = (section: ActiveSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 space-y-24 bg-[#F5F7FA]">
      {/* Intro Header - Navy Blue headings on Light Background */}
      <section className="text-center max-w-3xl mx-auto space-y-4" id="services-intro">
        <h1 className="font-mono text-[11px] font-bold tracking-widest text-[#0A4DBF] uppercase bg-[#0A4DBF]/10 px-3 py-1 rounded-full inline-block">
          WHAT WE DELIVER
        </h1>
        <h2 className="font-serif-georgia text-3xl sm:text-5xl font-medium tracking-tight text-[#002B6B]">
          Our Services Offered
        </h2>
        <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto select-none">
          Travis Group bridges engineering ruggedness, software/marketing intelligence, and decorative layout design. Choose any specialized division below to learn more and calculate immediate project margins.
        </p>
      </section>

      {/* Grid of the three major service profiles */}
      <section className="grid grid-cols-1 gap-12" id="services-divisions-grid">
        {divisions.map((div, index) => {
          const DivIcon = div.icon;
          return (
            <div
              key={div.id}
              className="group rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:shadow-md"
            >
              <div className="lg:col-span-4 space-y-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F7FA] border border-gray-200 text-[#002B6B] group-hover:scale-105 transition-transform">
                  <DivIcon className="h-6 w-6 text-[#0A4DBF]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif-georgia text-xl md:text-2xl font-medium text-[#002B6B]">{div.name}</h3>
                  <p className="font-sans text-[11px] text-[#D4A44A] uppercase font-bold tracking-widest">DIVISION 0{index + 1}</p>
                </div>
                <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                  {div.slogan}
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleNavigate(div.id as ActiveSection)}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#002B6B] text-white font-sans text-xs font-bold tracking-widest uppercase shadow-sm hover:bg-[#0A4DBF] active:scale-95 transition-all text-center cursor-pointer border-none"
                    id={`services-division-cta-${div.id}`}
                  >
                    {div.btnText}
                    <ArrowRight className="h-4 w-4 text-[#D4A44A]" />
                  </button>
                  <button
                    onClick={() => {
                      const mapping: Record<string, 'Engineering' | 'Digital Marketing' | 'Event Decoration'> = {
                        engineering: 'Engineering',
                        digital: 'Digital Marketing',
                        deco: 'Event Decoration',
                      };
                      openQuoteModal(mapping[div.id]);
                    }}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#002B6B] text-[#002B6B] bg-white hover:bg-neutral-50 font-sans text-xs font-bold tracking-widest uppercase shadow-sm active:scale-95 transition-all text-center cursor-pointer"
                    id={`services-division-quote-cta-${div.id}`}
                  >
                    Request a Quote
                  </button>
                </div>
              </div>

              {/* Service Topics Sublist */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#F5F7FA] rounded-2xl p-6 md:p-8 border border-gray-200">
                {div.topics.map((topic, id) => (
                  <div key={id} className="space-y-3.5">
                    <h4 className="font-sans text-sm font-bold text-[#002B6B] border-b border-gray-200 pb-1.5 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0A4DBF] shrink-0" />
                      {topic.label}
                    </h4>
                    <ul className="space-y-1.5 font-sans text-xs text-gray-600 font-light pl-3.5">
                      {topic.items.map((item, idx) => (
                        <li key={idx} className="list-disc leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Free Quote Banner Action - White Background with proper branding theme */}
      <section className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm" id="services-needs-badge">
        <div className="space-y-1">
          <p className="font-sans text-base font-bold text-[#002B6B]">Need customized combination services?</p>
          <p className="font-sans text-xs text-gray-600 leading-normal">Our sales coordinators provide unified proposals combining structural signage, business marketing setups and launching parties. Get coordinated prices in single references.</p>
        </div>
        <button
          onClick={() => openQuoteModal('General Inquiry')}
          className="rounded-full bg-[#002B6B] hover:bg-[#0A4DBF] text-white font-sans text-xs font-bold tracking-widest uppercase px-6 py-3.5 shrink-0 flex items-center gap-2 transition-all cursor-pointer shadow-md active:scale-95 border-none"
          id="services-combination-btn relative"
        >
          Request Quote Proposal
          <ExternalLink className="h-4 w-4 text-[#D4A44A]" />
        </button>
      </section>
    </div>
  );
}
