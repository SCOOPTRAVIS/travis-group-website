/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Hammer, Ruler, Lightbulb, Ship, Tractor, Factory, Warehouse, Home, CreditCard, ChevronRight, Calculator, FileSpreadsheet } from 'lucide-react';
import { ActiveSection } from '../types';

interface EngineeringSectionProps {
  setActiveSection: (section: ActiveSection) => void;
  setContactPrefill: (data: { division: 'engineering'; service: string; message: string; budget: string }) => void;
  openQuoteModal: (service?: 'Engineering' | 'Digital Marketing' | 'Event Decoration' | 'General Inquiry') => void;
}

export default function EngineeringSection({ setActiveSection, setContactPrefill, openQuoteModal }: EngineeringSectionProps) {
  // Sizing Estimator state
  const [structureType, setStructureType] = useState<'carport_premium' | 'carport_standard' | 'balustrades' | 'staircase' | 'warehouse_mesh'>('carport_premium');
  const [lengthMetres, setLengthMetres] = useState<number>(6);
  const [widthMetres, setWidthMetres] = useState<number>(3);
  const [steelGrade, setSteelGrade] = useState<'standard' | 'galvanized' | 'stainless_304'>('galvanized');
  const [needsInstallation, setNeedsInstallation] = useState<boolean>(true);

  // Estimator logic in South African Rands (ZAR)
  const calculateEstimate = () => {
    let basePricePerSqm = 1200; // Base standard carport ZAR/sqm
    let structureLabel = 'Premium Tensile Carport';

    if (structureType === 'carport_premium') {
      basePricePerSqm = 1850;
      structureLabel = 'Premium Tensile Membrane Carport';
    } else if (structureType === 'carport_standard') {
      basePricePerSqm = 1100;
      structureLabel = 'Standard Sheet Metal Carport';
    } else if (structureType === 'balustrades') {
      basePricePerSqm = 2400; // rate per meter actually
      structureLabel = 'Heavy-duty Steel Balustrades';
    } else if (structureType === 'staircase') {
      basePricePerSqm = 5500; // rate per flight step/meter
      structureLabel = 'Industrial Steel Staircase Frame';
    } else if (structureType === 'warehouse_mesh') {
      basePricePerSqm = 950;
      structureLabel = 'Warehouse Steel Fencing Mesh Partition';
    }

    const area = structureType === 'balustrades' || structureType === 'staircase' ? lengthMetres : lengthMetres * widthMetres;
    let materialSurcharge = 1.0;
    if (steelGrade === 'galvanized') materialSurcharge = 1.25;
    if (steelGrade === 'stainless_304') materialSurcharge = 2.1;

    let subtotal = area * basePricePerSqm * materialSurcharge;
    
    const items = [
      { description: `Raw Material Sourcing (${structureLabel})`, cost: Math.round(subtotal * 0.45) },
      { description: `Precision Shop Fabrication & Welds`, cost: Math.round(subtotal * 0.35) },
      { description: `Finish Coating (${steelGrade === 'standard' ? 'Structural Primer' : steelGrade === 'galvanized' ? 'Hot-dip Galvanizing' : 'Polished finish'})`, cost: Math.round(subtotal * 0.20) },
    ];

    if (needsInstallation) {
      const installCost = Math.round(subtotal * 0.15 + 2500);
      items.push({ description: 'On-site Structural Rigging & Fasteners', cost: installCost });
      subtotal += installCost;
    }

    const vat = Math.round(subtotal * 0.15);
    const total = subtotal + vat;

    return { subtotal, vat, total, items };
  };

  const { subtotal, vat, total, items } = calculateEstimate();

  const handleExportEstimate = () => {
    const structLabels: Record<string, string> = {
      carport_premium: 'Premium Tensile Carport',
      carport_standard: 'Standard Carport',
      balustrades: 'Balustrades',
      staircase: 'Custom Staircase Frame',
      warehouse_mesh: 'Warehouse Security Mesh',
    };

    setContactPrefill({
      division: 'engineering',
      service: `${structLabels[structureType]} Sizing Subevaluation`,
      message: `Hi Travis Engineering, I used your web estimator and built a custom specification:\n- Structure: ${structLabels[structureType]}\n- Dimensions: ${lengthMetres}m long ${structureType !== 'balustrades' && structureType !== 'staircase' ? `x ${widthMetres}m wide` : ''}\n- Steel Grade: ${steelGrade === 'stainless_304' ? 'Stainless 304' : steelGrade === 'galvanized' ? 'Galvanized' : 'Standard Prime'}\n- Installation required: ${needsInstallation ? 'Yes' : 'No'}\n- Projected budget bracket: R${total.toLocaleString('en-ZA')}`,
      budget: `R${Math.round(total / 1000) * 1000}`,
    });
    setActiveSection('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <button
              onClick={() => {
                const element = document.getElementById('engineering-calculator');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 border-2 border-[#002B6B] bg-white text-[#002B6B] font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-sm hover:bg-neutral-50 active:scale-95 transition-all text-center cursor-pointer"
            >
              Cost Calculator
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

      {/* Interactive Sizing Cost Estimator Tool */}
      <section className="border border-gray-200 bg-white rounded-3xl overflow-hidden shadow-sm" id="engineering-calculator">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Controls Form */}
          <div className="lg:col-span-7 p-8 md:p-12 space-y-8 bg-[#F5F7FA] text-gray-800">
            <div className="space-y-2">
              <span className="font-mono text-[9px] font-bold text-[#0A4DBF] tracking-wider uppercase border border-gray-200 px-2.5 py-1 rounded bg-white">
                INTERACTIVE COST PLANNER
              </span>
              <h2 className="font-serif-georgia text-2xl text-[#002B6B] tracking-tight font-medium mt-1">
                Engineering Subevaluation Estimator
              </h2>
              <p className="font-sans text-xs text-gray-600 leading-normal font-light">
                Get an instant estimated cost range in ZAR for raw materials and shop fabrications. Configure your spec details below.
              </p>
            </div>

            <div className="space-y-6">
              {/* Structure selection */}
              <div className="space-y-2.5">
                <label className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Structure Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'carport_premium', label: 'Premium Membrane Carport' },
                    { id: 'carport_standard', label: 'Standard Sheet metal' },
                    { id: 'balustrades', label: 'Heavy Balustrades (m)' },
                    { id: 'staircase', label: 'Staircase Frame (m)' },
                    { id: 'warehouse_mesh', label: 'Warehouse Mesh Wall' },
                  ].map((st) => (
                    <button
                      key={st.id}
                      onClick={() => {
                        setStructureType(st.id as any);
                        if (st.id === 'balustrades' || st.id === 'staircase') {
                          setWidthMetres(1);
                        } else if (widthMetres === 1) {
                          setWidthMetres(3);
                        }
                      }}
                      className={`text-left p-3 rounded-lg border text-xs font-semibold select-none transition-all duration-150 cursor-pointer ${
                        structureType === st.id
                          ? 'bg-[#002B6B] text-white border-[#002B6B]'
                          : 'bg-white border-gray-200 text-[#002B6B] hover:border-[#0A4DBF]'
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dimension Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider flex justify-between select-none">
                    <span>{structureType === 'balustrades' || structureType === 'staircase' ? 'Linear Length Required' : 'Length'}</span>
                    <span className="text-[#0A4DBF] font-mono text-xs font-bold">{lengthMetres} Metres</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max={structureType === 'balustrades' ? "50" : "15"}
                    step="1"
                    value={lengthMetres}
                    onChange={(e) => setLengthMetres(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0A4DBF]"
                  />
                  <p className="font-mono text-[10px] text-gray-500">Min: 2m · Max: {structureType === 'balustrades' ? "50m" : "15m"}</p>
                </div>

                {/* Show width only for non-linear structures */}
                {structureType !== 'balustrades' && structureType !== 'staircase' && (
                  <div className="space-y-2.5">
                    <label className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider flex justify-between select-none">
                      <span>Width Span</span>
                      <span className="text-[#0A4DBF] font-mono text-xs font-bold">{widthMetres} Metres</span>
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="10"
                      step="1"
                      value={widthMetres}
                      onChange={(e) => setWidthMetres(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0A4DBF]"
                    />
                    <p className="font-mono text-[10px] text-gray-500 font-light">Min: 2m · Max: 10m</p>
                  </div>
                )}
              </div>

              {/* Steel Grades and Finishes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Steel Material Spec</label>
                  <select
                    value={steelGrade}
                    onChange={(e: any) => setSteelGrade(e.target.value)}
                    className="w-full rounded-lg bg-white border border-gray-200 text-xs px-3.5 py-2.5 text-gray-800 font-medium focus:ring-1 focus:ring-[#0A4DBF] focus:outline-none"
                  >
                    <option value="standard">Standard Structural Mild Steel (Red Oxide Primed)</option>
                    <option value="galvanized">Hot-dip Galvanized Durasteel (Corrosion Proof)</option>
                    <option value="stainless_304">Premium Stainless Steel Grade 304</option>
                  </select>
                </div>

                <div className="space-y-2.5">
                  <label className="font-sans text-xs font-bold text-[#002B6B] uppercase tracking-wider block">Site Handling option</label>
                  <div className="flex items-center h-11 border border-gray-200 rounded-lg bg-white px-4">
                    <input
                      type="checkbox"
                      id="needsInstallation"
                      checked={needsInstallation}
                      onChange={(e) => setNeedsInstallation(e.target.checked)}
                      className="rounded h-4.5 w-4.5 cursor-pointer accent-[#0A4DBF]"
                    />
                    <label htmlFor="needsInstallation" className="ml-3 font-sans text-xs text-gray-700 font-semibold cursor-pointer select-none">
                      Include On-Site Rigging / Fitting
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Estimation results with Dark Navy container and premium text */}
          <div className="lg:col-span-5 bg-[#001A4D] text-white p-8 md:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 relative">
            <div className="space-y-8">
              <div className="pb-4 border-b border-white/10">
                <h3 className="font-mono text-[9px] font-bold text-[#D4A44A] tracking-wider uppercase">ESTIMATION REVIEW</h3>
                <p className="font-sans text-sm text-white/70 mt-1 font-medium">Bespoke Fabrication Pricing</p>
              </div>

              {/* Primary Price output */}
              <div className="space-y-1 select-all">
                <p className="font-sans text-xs text-white/60 font-semibold uppercase tracking-wider">Projected Cost (Total Incl. VAT)</p>
                <p className="font-sans text-3xl sm:text-4xl font-black text-white tracking-tight">
                  R {total.toLocaleString('en-ZA')}
                </p>
                <p className="font-mono text-[10px] text-white/50">Calculated under Durban supplier metal indices.</p>
              </div>

              {/* Itemized list breakdown */}
              <div className="space-y-3.5 bg-white/5 p-4.5 rounded-xl border border-white/10">
                <p className="font-sans text-xs text-[#D4A44A] font-bold tracking-wider uppercase">Itemized Budget Projections</p>
                <div className="space-y-2">
                  {items.map((it, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-white/75 truncate max-w-[210px]">{it.description}</span>
                      <span className="font-mono text-white font-bold">R {it.cost.toLocaleString('en-ZA')}</span>
                    </div>
                  ))}
                  <div className="h-px bg-white/10 my-2" />
                  <div className="flex justify-between items-center text-xs text-white/65">
                    <span>Estimated South African VAT (15%)</span>
                    <span className="font-mono font-bold">R {vat.toLocaleString('en-ZA')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 block">
              <button
                onClick={handleExportEstimate}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#D4A44A] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#D4A44A]/90 transition-all duration-150 focus:outline-none cursor-pointer border-none shadow-lg text-center"
                id="engineering-export-estimate-btn"
              >
                <FileSpreadsheet className="h-4.5 w-4.5 text-white" />
                Apply Parameters to Contact Form
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
