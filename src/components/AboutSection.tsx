/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Award, HeartHandshake, Zap, CalendarCheck2, ArrowRight } from 'lucide-react';
import { ActiveSection } from '../types';

interface AboutSectionProps {
  setActiveSection: (section: ActiveSection) => void;
}

export default function AboutSection({ setActiveSection }: AboutSectionProps) {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for the highest standards of materials and workmanship in every building, campaign, and setup we execute.',
      icon: Award,
    },
    {
      title: 'Integrity',
      description: 'We operate honestly, ethically, and transparently—providing accurate pricing details and honest client advisory.',
      icon: ShieldCheck,
    },
    {
      title: 'Innovation',
      description: 'We continuously seek modern solutions and creative concepts to keep your structural projects and marketing cutting-edge.',
      icon: Zap,
    },
    {
      title: 'Customer Satisfaction',
      description: 'Our clients remain at the absolute center of our project pipelines. We listen carefully and design tailored client outcomes.',
      icon: HeartHandshake,
    },
    {
      title: 'Reliability',
      description: 'We deliver projects on time and strictly according to blueprint specs and agreed budgets without hidden surprises.',
      icon: CalendarCheck2,
    },
  ];

  const handleNavigate = (section: ActiveSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 space-y-24 bg-[#F5F7FA]">
      {/* Intro Narrative Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center" id="about-overview">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs">
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#0A4DBF] font-bold">
              ESTABLISHED FOUNDATIONS
            </span>
          </div>
          <h1 className="font-serif-georgia text-3xl sm:text-5xl font-medium tracking-tight text-[#002B6B] leading-[1.12]">
            About Travis Group
          </h1>
          <p className="font-sans text-base text-gray-700 leading-relaxed">
            Travis Group was founded with a clear vision: to build a company capable of serving clients across diverse South African sectors through innovation, robust quality workmanship, and exceptional customer service.
          </p>
          <p className="font-sans text-sm text-gray-600 leading-relaxed">
            Over time, Travis Group has grown into three specialized operations—Travis Group Engineering, Travis Group Digital, and Travis Deco. Each division operates with dedicated technicians and specialists while maintaining the same commitment to absolute excellence that defines the Travis Group brand.
          </p>
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <p className="font-sans text-sm italic text-[#002B6B]">
              "We believe every project deserves rigorous attention to detail—whether it's constructing a heavy-gauge structural steel carport, hosting an optimization audit to grow a business online, or fashioning a custom floral table arrangement for an unforgettable wedding budget."
            </p>
          </div>
        </div>

        {/* Dynamic Division Panels Overlay */}
        <div className="lg:col-span-5 relative">
          <div className="bg-[#002B6B] text-white rounded-3xl p-8 border border-[#001A4D] shadow-xl space-y-6">
            <h3 className="font-mono text-[10px] font-bold tracking-wider text-[#D4A44A] uppercase">
              OUR POWERFUL FRAMEWORK
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Travis Group Engineering', detail: 'Fabrication, structural welding, heavy carports, and industrial operations maintenance.' },
                { name: 'Travis Group Digital', detail: 'Bespoke corporate website development, local search SEO optimization, and social campaigns.' },
                { name: 'Travis Deco', detail: 'Unparalleled wedding planning, custom backdrops, balloon installations and tablescapes.' },
              ].map((div, idx) => (
                <div key={idx} className="bg-[#001A4D] border border-white/10 p-5 rounded-xl flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4A44A] text-white font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white">{div.name}</h4>
                    <p className="font-sans text-xs text-white/70 mt-1 leading-relaxed">{div.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Carousel/Grid */}
      <section className="space-y-12" id="about-values">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-mono text-[11px] font-bold tracking-widest text-[#002B6B] uppercase">
            WHO WE ARE AT HEART
          </h2>
          <h3 className="font-serif-georgia text-3xl font-medium tracking-tight text-[#002B6B]">
            Our Core Values
          </h3>
          <p className="font-sans text-sm text-gray-600 leading-normal">
            These guiding operational codes are embedded into every activity we undertake, ensuring premium deliveries for our valued South African patrons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-100 bg-[#F5F7FA] text-[#0A4DBF]">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="font-sans text-base font-bold text-[#002B6B]">{v.title}</h3>
                  <p className="font-sans text-xs text-gray-600 leading-relaxed font-light">
                    {v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust & Location Summary Statement - Dark Navy with White/Gold features */}
      <section className="bg-[#001A4D] text-white rounded-3xl p-10 md:p-16 relative overflow-hidden border border-[#001A4D]" id="about-location-badge">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 h-64 w-64 rounded-full bg-[#D4A44A]/10 blur-3xl" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <span className="font-mono text-[10px] font-bold tracking-widest text-[#D4A44A] uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            OPERATING ACROSS SOUTH AFRICA
          </span>
          <h2 className="font-serif-georgia text-2xl sm:text-4xl font-medium tracking-tight">
            Headquartered in Durban, Serving Nationwide Business
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed font-light">
            While our main offices are settled along the beautiful coastal hub of Durban, KwaZulu-Natal, Travis Group is equipped with resource networks to manage engineering installations, digital platform launches, and major event projects across all of South Africa.
          </p>
          <button
            onClick={() => handleNavigate('contact')}
            className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-gray-100 text-[#001A4D] font-sans text-xs font-bold tracking-widest uppercase px-6 py-4 transition-colors shrink-0 shadow-sm cursor-pointer"
            id="about-quote-cta"
          >
            Connect With Our Team Now
            <ArrowRight className="h-4 w-4 text-[#001A4D]" />
          </button>
        </div>
      </section>
    </div>
  );
}
