/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Smartphone, Search, TrendingUp, MailCheck, BarChart4, ChevronRight, PieChart, Users, Laptop, ArrowRight } from 'lucide-react';
import { ActiveSection } from '../types';

interface DigitalSectionProps {
  setActiveSection: (section: ActiveSection) => void;
  setContactPrefill: (data: { division: 'digital'; service: string; message: string; budget: string }) => void;
  openQuoteModal: (service?: 'Engineering' | 'Digital Marketing' | 'Event Decoration' | 'General Inquiry') => void;
}

export default function DigitalSection({ setActiveSection, setContactPrefill, openQuoteModal }: DigitalSectionProps) {
  // Calculator States
  const [adBudget, setAdBudget] = useState<number>(3500); // Monthly budget in ZAR
  const [industryMultiplier, setIndustryMultiplier] = useState<'service_provider' | 'ecommerce' | 'corporate_b2b'>('service_provider');
  const [dealValue, setDealValue] = useState<number>(1500); // ZAR value of a single client/sale
  const [primaryChannel, setPrimaryChannel] = useState<'seo' | 'social_meta' | 'google_ads'>('seo');

  // Multipliers & Math
  const getROIEstimate = () => {
    let costPerClick = 5.50; // default avg CPC ZAR
    let conversionRate = 0.02; // default lead conversion rate

    if (primaryChannel === 'google_ads') {
      costPerClick = 9.00;
      conversionRate = 0.035;
    } else if (primaryChannel === 'social_meta') {
      costPerClick = 4.20;
      conversionRate = 0.015;
    } else if (primaryChannel === 'seo') {
      costPerClick = 2.00; // SEO represents blended organic yield
      conversionRate = 0.03;
    }

    const traffic = Math.round(adBudget / costPerClick);
    const qualifiedLeads = Math.round(traffic * conversionRate);
    
    let salesRate = 0.15; // default 15% close rate on leads
    if (industryMultiplier === 'ecommerce') salesRate = 0.35; // online carts have immediate conversion
    if (industryMultiplier === 'corporate_b2b') salesRate = 0.08; // heavy long cycles

    const additionalSales = Math.max(1, Math.round(qualifiedLeads * salesRate));
    const projectedRevenue = additionalSales * dealValue;
    const roiRatio = adBudget > 0 ? (projectedRevenue / adBudget) : 0;
    
    return {
      traffic,
      qualifiedLeads,
      additionalSales,
      projectedRevenue,
      roiRatio,
    };
  };

  const { traffic, qualifiedLeads, additionalSales, projectedRevenue, roiRatio } = getROIEstimate();

  const handleExportEstimate = () => {
    const channelNames = { seo: 'Organic SEO & Local Web presence', social_meta: 'Facebook & Instagram Meta campaigns', google_ads: 'Google Ranking Ads' };
    const multiplierLabels = { service_provider: 'Client Service Biz', ecommerce: 'E-commerce Online Store', corporate_b2b: 'Corporate B2B Business' };

    setContactPrefill({
      division: 'digital',
      service: `Strategic Growth Campaign Scoping`,
      message: `Hi Travis Digital, I ran your online ROI calculator:\n- Industry Structure: ${multiplierLabels[industryMultiplier]}\n- Digital Channel Interest: ${channelNames[primaryChannel]}\n- Monthly Ad Budget: R${adBudget.toLocaleString('en-ZA')}\n- Average Sale Deal Value: R${dealValue.toLocaleString('en-ZA')}\n- Targeted Monthly ROI Ratio: ${roiRatio.toFixed(1)}x revenue ratio. Please schedule a strategy audit.`,
      budget: `R${Math.round(adBudget / 1000) * 1000}`,
    });
    setActiveSection('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <button
              onClick={() => {
                const element = document.getElementById('digital-calculator');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 1200, behavior: 'smooth' });
                }
              }}
              className="px-6 py-3.5 border-2 border-[#002B6B] bg-white text-[#002B6B] font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-sm hover:bg-neutral-50 active:scale-95 transition-all text-center cursor-pointer"
            >
              ROI Calculator
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

      {/* Interactive Growth & ROI Estimator Widget */}
      <section className="border border-gray-200 bg-white rounded-3xl overflow-hidden shadow-sm" id="digital-calculator">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Inputs Section */}
          <div className="lg:col-span-7 p-8 md:p-12 space-y-8 bg-[#F5F7FA] text-gray-800">
            <div className="space-y-2">
              <span className="font-mono text-[9px] font-bold text-[#0A4DBF] tracking-wider uppercase border border-gray-200 px-2.5 py-1 rounded bg-white">
                INTERACTIVE TRAFFIC SIMULATOR
              </span>
              <h2 className="font-serif-georgia text-2xl text-[#002B6B] tracking-tight font-medium mt-1">
                Strategic Digital ROI Growth Planner
              </h2>
              <p className="font-sans text-xs text-gray-600 leading-normal font-light">
                Model estimated customer acquisition volume using potential Meta & Search PPC budgets. Select your operational variables below.
              </p>
            </div>

            <div className="space-y-6">
              {/* Campaign channels */}
              <div className="space-y-2.5">
                <label className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Target Marketing Medium</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'seo', label: 'Local Organic SEO Focus' },
                    { id: 'social_meta', label: 'Meta Campaigns (FB/IG)' },
                    { id: 'google_ads', label: 'Google Search Ads' },
                  ].map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => setPrimaryChannel(ch.id as any)}
                      className={`text-left p-3 rounded-lg border text-xs font-semibold select-none transition-all duration-150 cursor-pointer ${
                        primaryChannel === ch.id
                          ? 'bg-[#002B6B] text-white border-[#002B6B]'
                          : 'bg-white border-gray-200 text-[#002B6B] hover:border-[#0A4DBF]'
                      }`}
                    >
                      {ch.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for adBudget */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs text-[#002B6B] font-bold uppercase tracking-wider block mb-1">
                  <span>Monthly Ad Allocation</span>
                  <span className="text-[#0A4DBF] font-mono text-xs font-bold">R {adBudget.toLocaleString('en-ZA')} /month</span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="35000"
                  step="500"
                  value={adBudget}
                  onChange={(e) => setAdBudget(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0A4DBF]"
                />
                <p className="font-mono text-[9px] text-gray-500 flex justify-between font-light">
                  <span>Min: R 1,500</span>
                  <span>Mid: R 18,000</span>
                  <span>Max: R 35,000</span>
                </p>
              </div>

              {/* Deal value input and Industry Multiplier */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Average Deal Value (ZAR)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-sans text-xs font-bold">R</span>
                    <input
                      type="number"
                      min="100"
                      max="100000"
                      value={dealValue}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setDealValue(val > 0 ? val : 0);
                      }}
                      className="w-full rounded-lg bg-white border border-gray-200 text-xs pl-8 pr-3.5 py-2.5 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Business Model Type</label>
                  <select
                    value={industryMultiplier}
                    onChange={(e: any) => setIndustryMultiplier(e.target.value)}
                    className="w-full rounded-lg bg-white border border-gray-200 text-xs px-3.5 py-2.5 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none cursor-pointer"
                  >
                    <option value="service_provider">Local Client Service biz (Ex: Plumbing, Consulting)</option>
                    <option value="ecommerce">E-commerce Online Store checkout orders</option>
                    <option value="corporate_b2b">Corporate / Heavy Industrial Sales</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Outputs Panel with Dark Navy background */}
          <div className="lg:col-span-5 bg-[#001A4D] text-white p-8 md:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 select-none">
            <div className="space-y-8">
              <div className="pb-4 border-b border-white/10">
                <h3 className="font-mono text-[9px] font-bold text-[#D4A44A] tracking-wider uppercase">SIMULATOR OUTPUTS</h3>
                <p className="font-sans text-sm text-white/70 mt-1 font-medium">Bespoke Campaign Projections</p>
              </div>

              {/* Grid outputs stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 border border-white/10 rounded-xl">
                  <span className="font-sans text-[10px] text-white/60 uppercase font-bold tracking-wider block">Est. Page Visits</span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-white mt-1 block">{traffic.toLocaleString()}</span>
                  <span className="text-[10px] text-[#D4A44A] block mt-0.5">Visits per month</span>
                </div>
                <div className="bg-white/5 p-4 border border-white/10 rounded-xl">
                  <span className="font-sans text-[10px] text-white/60 uppercase font-bold tracking-wider block">Qualified Leads</span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-white mt-1 block">{qualifiedLeads}</span>
                  <span className="text-[10px] text-[#D4A44A] block mt-0.5">Inquiries generated</span>
                </div>
                <div className="bg-white/5 p-4 border border-white/10 rounded-xl">
                  <span className="font-sans text-[10px] text-white/60 uppercase font-bold tracking-wider block">Estimated Deals</span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-white mt-1 block">~ {additionalSales}</span>
                  <span className="text-[10px] text-[#D4A44A] block mt-0.5">Conversions</span>
                </div>
                <div className="bg-white/5 p-4 border border-white/10 rounded-xl">
                  <span className="font-sans text-[10px] text-white/60 uppercase font-bold tracking-wider block">Return Ratio</span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-white mt-1 block">{roiRatio.toFixed(1)}x</span>
                  <span className="text-[10px] text-[#D4A44A] block mt-0.5">Ad Spend Boost</span>
                </div>
              </div>

              {/* Bottomline summary */}
              <div className="space-y-1 text-center bg-white/10 p-4.5 rounded-xl border border-white/10">
                <span className="text-white/70 font-sans text-xs block">Projected Monthly Sales/Inquiry revenue boost</span>
                <span className="font-serif-georgia text-2xl font-black text-[#D4A44A] tracking-tight">R {projectedRevenue.toLocaleString('en-ZA')}</span>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={handleExportEstimate}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#D4A44A] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#D4A44A]/90 transition-all duration-150 focus:outline-none cursor-pointer border-none shadow-lg"
                id="digital-export-estimate-btn"
              >
                Schedule Free Strategy Audit
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
